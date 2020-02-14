import socket from 'socket.io-client';

const conSocket = socket('http://192.168.10.17:3333', {
    autoConnect: false,
});

function subcribeNewDev(subcribeFunction){
    conSocket.on('NewDev', subcribeFunction);
}

function connect(latitude, longitude, techs){
    conSocket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    conSocket.connect();
}

function desconect(){
    if(conSocket.connectedt){
        conSocket.desconect();
    }
}

export {
    connect,
    desconect,
    subcribeNewDev,
}