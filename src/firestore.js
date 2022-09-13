const { firestore, Timestamp } = require('./firebase')

const db = firestore()


async function getTracks() {
    const snapshot = await db.collection('tracks').get()
    return snapshot.docs.map(doc => doc.data())
}

async function getMostPlayed() {
    const snapshot = await db.collection('tracks')
        .limit(20).orderBy('played_count', 'desc').get()
    return snapshot.docs.map(doc => doc.data())
}

async function getTrack(video_id) {
    const storedTrack = await db.collection('tracks').where('video_id', '==', video_id).get()
    if (storedTrack.empty) {
        return [undefined, undefined]
    }
    return [storedTrack?.docs[0].data(), storedTrack?.docs[0]]
}

async function addTrack(track) {
    const { video_id } = track
    if(!video_id) { return new Error('video_id is required') }
    const [storedTrack] = await getTrack(video_id)
    if (!storedTrack) {
        return db.collection('tracks')
            .add({ ...track, played_count: 0 })
    }
}

async function atulizeTrack(track) {
    const { video_id } = track
    if(!video_id) { return new Error('video_id is required') }
    const [storedTrack, doc] = await getTrack(video_id)
    if (!storedTrack.empty) {
        return db.collection('tracks').doc(doc.id)
            .set(track, { merge: true })
    }
}

async function setPlayedNow(video_id) {
    const [storedTrack, doc] = await getTrack(video_id)
    if (!storedTrack.empty) {

        const newStoredTrack = {
            ...storedTrack,
            played_count: (storedTrack.played_count || 0) + 1,
            last_play: Timestamp.now(),
        }

        await db.collection('tracks').doc(doc.id)
            .set(newStoredTrack, { merge: true })

        return newStoredTrack
    }
}

async function setNotAvailable(video_id) {
    const [storedTrack, doc] = await getTrack(video_id)
    if (!storedTrack.empty) {
        return db.collection('tracks').doc(doc.id)
            .set({ available: false }, { merge: true })
    }
}


module.exports = {
    getTracks,
    getTrack,
    addTrack,
    atulizeTrack,
    setPlayedNow,
    getMostPlayed,
    setNotAvailable,
}