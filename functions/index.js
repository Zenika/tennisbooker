const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

const db = admin.firestore()

exports.getReservations = functions.https.onRequest(async (req, res) => {
    const snapshot = await db.collection('reservations').get()
    let output = []
    snapshot.forEach(doc => {
        output.push({
            timestamp: doc.data().timestamp._seconds,
        })
    })
    res.set('Access-Control-Allow-Origin', '*')
    res.json(output)
})

exports.addReservation = functions.https.onCall(async (data, context) => {
    const reservation = { timestamp: admin.firestore.Timestamp.fromMillis(parseInt(data.timestamp, 10) * 1000) }
    const writeResult = await admin
        .firestore()
        .collection('reservations')
        .add(reservation)
    return 'ok'
})
