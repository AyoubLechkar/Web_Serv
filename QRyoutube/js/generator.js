function attractiveQR_Generator(element,userInput,image){
    const qrcode=new QRCodeStyling({
        width: 250,
        height: 250,
        type: 'svg',
        margin: 0,
        data: userInput,
        image:image?image:'https://themayanagari.com/wp-content/uploads/2020/09/Facebook-Logo-Png-Image-Free-Download-1.jpg',
        imageOptions:{
            margin: 8,
        },
        dotsOptions:{
            color:'#000000',
            type:'dots', // rounded extra-rounded
        },
        backgroundOptions:{
            // color:'gray',
            gradient:{
                type:'linear',
                rotation:45,
                colorStops: [{ offset: 0, color: 'gray' }, { offset: 1, color: 'red' }]
            },
        },
        cornersSquareOptions:{
            color: '#0000ff',
            type:'dot', // square
        }

    });

    qrcode.append(element);
    // qrcode.download({name:'qrcode',extension:'png'});
}


function simpleGenerator(element,userInput){
    let qrcode = new QRCode(element,{
        text: (userInput=='') ? 'www.udemy.com':userInput,
        width: 250,
        height: 250,
        type: 'svg',
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

