'use strict';

const config = require('../config');

module.exports = {
    "menu": {
        "es": ["Servicios","Proyectos destacados","Tarifas","Contacto"],
        "en": ["Services","Outstanding projects","Fees","Contact"]
    },
    "banner": {
        "es": ["Traductora jurado de inglés", "más de diez años de experiencia", "SERVICIOS"],
        "en": ["English sworn translator", "more than 10 years of experience", "SERVICES"]

    },
    "services": {
        "es":{ 
            "title": "SERVICIOS",
            "description":["Traducciones generales, técnicas y juradas inglés-español-inglés.","Especialización en ciberseguridad,  informática y traducciones jurídicas.","Presupuesto gratuito en 24 horas Traducciones urgentes","calidad y cumplimiento de los plazos" ]
            },
        "en":{
            "title": "SERVICES",
            "description": ["General, technical, legal and sworn translations English-Spanish-English","Specialization in Cybersecurity, Computer Science and legal translations (also sworn/certified translations)","Free quote within 24 hours Urgent translations","Quality and adherence to deadlines"]
        }
    },
    "features": {
        "es": {
            "title": "Proyectos destacados",
            "description":[
                "CNI Centro Nacional Inteligencia",
                "CCN Centro Criptológico Nacional",
                "Museo de Ciencias Naturales Madrid",
                "Telefónica Departamento de Inteligencia en Seguridad",
                "Sector Turismo Ayuntamiento Ibiza",
                "Webs",
                'Presentaciones',
                'contratos',
                'documentación para empresas',
                // 'Incita Security, InnoTec, Telefónica', 
                'Otras traduciones para clientes particulares: certificados académicos, expedientes/documentación de divorcio, de adopciones'
            ]
           
        },
        "en": {
            "title": "Outstanding projects",
            "description":[
                "CNI Spanish National Intelligence Centre",
                "CCN Spanish National Cryptologic Centre",
                "Madrid’s Museum of Natural Sciences",
                "Department of Security Intelligence at Telefónica",
                "Tourism Department of Ibiza’s City Council",
                "webs",
                'Presentations',
                'contracts', 
                'internal documents for companies', 
                // 'Incita Security, InnoTec, Telefónica and others',
                'Other translations: Academic Certificates, divorce documentation or adoptions'     
            ]
        }
    },
    "fees": {
        "es": {
            "title": "TARIFAS",
            "description": "Inglés-español-inglés $/EUR 0,08 (la tarifa es negociable y sujeta a cambios. El precio final dependerá del tipo y la dificultad del texto original)"
        },
        "en": {
            "title": "FEES",
            "description": "English-Spanish-English $/EUR 0,08 (The fee is negotiable and subject to change. Final price will depend on the kind and difficulty of the source text)"
        }
    },
    "contact": {
        "es":{
            "title": "CONTACTO",
            "description": "bla bla en español",
            "formName":"Nombre:",
            "formEmail": "Correo electronico:",
            "formMessage": "Mensaje:",
            "formSubmit": "Enviar",
            "direction": config.OWNER_DIRECTION,
            "email": config.OWNER_EMAIL,
            "telephone": config.OWNER_TEL
            },
        "en":{
            "title": "CONTACT",
            "description": "bla bla en ingles",
            "formName":"Name:",
            "formEmail": "Email:",
            "formMessage": "Message:",
            "formSubmit": "Submit",
            "direction": config.OWNER_DIRECTION,
            "email": config.OWNER_EMAIL,
            "telephone": config.OWNER_TEL
            }
    }
};
