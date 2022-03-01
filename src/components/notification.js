const notificate = (title, body) => new Notification(title, {body, icon:'../tomato.png'})

verificate()
async function verificate(callback = ()=>{}){

    if (!Notification) {
        alert("Este browser não suporta notificações de Desktop");
        callback(false)
        return
    }
    
    if (Notification.permission !== 'denied') {

        await Notification.requestPermission( permission => {
            if (permission === "granted") {
                callback(true)
                return
            }
        })

        return

    }
    
    if (Notification.permission === "granted") {
        callback(true)
        return
    }

}

function addListener(notification){

    notification.onclick = (e) => {
        e.preventDefault();
        window.focus();
        notification.close();
    }

}


export function notifyFocus(){
    
    verificate(()=>{

        const notification = notificate('In focus','Start of focus time')
        addListener(notification)

    })
    
}


export function notifyBreak(){

    verificate(()=>{

        const notification = notificate('Paused','Full focus time')
        addListener(notification)

    })

}