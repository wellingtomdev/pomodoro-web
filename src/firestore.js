const firebase = process.firebase 
const db = firebase.firestore


async function getTracks(){
    const snapshot = await db.collection('tracks').get()
    return snapshot.docs.map(doc => doc.data())
}

async function getTrack(){
    const snapshot = await db.collection('tracks').get()
    return snapshot.docs.map(doc => doc.data())
}

async function setTrack(video_id, track){
    const storedTrack = await db.collection('tracks').where('video_id', '==', video_id).get()
    const docId = storedTrack?.docs[0]?.id
    if(storedTrack.empty){
        return db.collection('tracks').add(track)
    } else {
        return db.collection('tracks').doc(docId).set(track)
    }
}


module.exports = {
    getTracks,
    getTrack,
    setTrack,
}