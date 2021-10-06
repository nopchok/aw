const crypto = require('crypto')
const charToSymbol = (c) => [...'.12345abcdefghijklmnopqrstuvwxyz'].indexOf(c);
const toHex = (buffer) => [...new Uint8Array(buffer)].map(b => b.toString(16).padStart(2, '0')).join('');
const nameToHex = o => {
    const t = new Uint8Array(8);
    let e = 63;
    return [...o].forEach(o => {
        let r = charToSymbol(o);
        e < 5 && (r <<= 1);
        for(let o = 4; o >= 0; --o) e >= 0 && (t[Math.floor(e / 8)] |= (r >> o & 1) << e % 8, --e)
    }), toHex(t)
};
const fromHexString = (hexString) => new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
const shuffleArray = (a, fix) => {
    let array = JSON.parse(JSON.stringify(a));
    for(let i = array.length - 1; i > 0; i--) {
        const j = fix[i];
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
const fix = (new Array(8)).fill(0).map(() => Math.round(Math.random()));
const mine = (account, mine_tx, dificult, good_nonce) => {
    good_nonce = parseInt(good_nonce);
    let nonce;
    const input = new Uint8Array(24);
    input.set(fromHexString(nameToHex(account) + mine_tx.slice(0, 16)));
    let n = 0;
    let h = '';
    const end_time = +new Date() + 600000;
    while(1) {
        if(good_nonce == 2) {
            nonce = new Uint8Array([0, 0, 0, 0, 0].concat([...Array(3)].map(n => parseInt(Math.floor(Math.random() * 255)))));
        } else if(good_nonce == 1) {
            nonce = new Uint8Array([0, 0, 0, 0].concat([...Array(4)].map(n => parseInt(Math.floor(Math.random() * 255)))));
        } else if(good_nonce == 3) {
            nonce = [0, 0, 0, 0].concat([...Array(4)].map(n => parseInt(Math.floor(Math.random() * 255))));
            nonce = new Uint8Array(shuffleArray(nonce, fix));
        } else {
            nonce = new Uint8Array([...Array(8)].map(n => parseInt(Math.floor(Math.random() * 255))));
        }
        input.set(nonce, 16);
        h = crypto.createHash('sha256').update(input).digest('hex');
        if(h[0] == '0')
            if(h[1] == '0')
                if(h[2] == '0')
                    if(h[3] == '0')
                        if(parseInt(h[4], 16) <= dificult) break;
        n++;
        if(n % 10000000 == 0 || (+new Date() > end_time)) {
            return '';
        }
    }
    return toHex(nonce);
}
let m = mine(process.argv[2], process.argv[3], Number(process.argv[4]), Number(process.argv[5]));
console.log(m)