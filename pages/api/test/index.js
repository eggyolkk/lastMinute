import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === 'GET'){
        const client = await clientPromise;
        const db = client.db("lastminute_data");

        const testdata = await db
            .collection("testdata")
            .find({})
            .limit(10)
            .toArray();

        res.json(testdata);
    }
    else if (req.method === 'POST') {
        const comment = req.body.comment;
        const newComment = {
            id: 2,
            text: comment
        }

        const client = await clientPromise;
        const db = client.db("lastminute_data");

        const testdata = await db
            .collection("testdata")
            .insertOne(newComment)

        res.json(testdata);
    }   
}