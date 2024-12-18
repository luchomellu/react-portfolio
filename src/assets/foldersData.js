import cvES from './cvs/MellusoLucianoES.pdf';
import cvEN from './cvs/MellusoLucianoEN.pdf';
import folder from './images/directory_closed-4.png';
import pdf from './images/textFile.png';
import lentesuli from './images/lentesuli.jpg'
import luchoCool from './images/luchoCool.jpg'
import luchoDJ from './images/luchoDJ.jpg'
import luchoGorrin from './images/luchoGorrin.jpg'


const data = {
    name:"CV's",
    type: "folder",
    image: folder,
    items:[
        {
            name:"MellusoLucianoCV-ES.pdf",
            type:"pdf",
            image:pdf,
            items:[],
            file:cvES
        },
        {
            name:"MellusoLucianoCV-EN.pdf",
            type:"pdf",
            image:pdf,
            items:[],
            file:cvEN
        },
        {
            name:"Photos",
            type: "folder",
            image: folder,
            items:[
                {
                    name:"Foto sexy :p.jpg",
                    type: "photo",
                    image: lentesuli,
                    items:[],
                    file:null
                },
                {
                    name:"DJ-LUCHO.jpg",
                    type: "photo",
                    image: luchoDJ,
                    items:[],
                    file:null
                },
                {
                    name:"en_un_cumple.jpg",
                    type: "photo",
                    image: luchoGorrin,
                    items:[],
                    file:null
                },
                {
                    name:"Fotos prohibidas de lucho",
                    type: "folder",
                    image: folder,
                    items:[
                        {
                            name:"facha.jpg",
                            type: "photo",
                            image: luchoCool,
                            items:[],
                            file:null
                        }
                    ],
                    file:null
                }
            ],
            file:null
        }
    ],
    file:null
}

export default data;