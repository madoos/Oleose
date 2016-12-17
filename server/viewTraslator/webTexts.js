'use strict';

const config = require('../config');

module.exports = {
    "appName": config.APP_NAME,
    "menu": {
        "es": ["Servicios","Clientes Destacados","Tarifas","Contacto"],
        "en": ["Services","Outstandings Clientes","Fees","Contact"]
    },
    "banner": {
        "es": ["Traductora jurado de inglés", "más de diez años de experiencia", "SERVICIOS"],
        "en": ["English sworn translator", "more than 10 years of experience", "SERVICES"]

    },
    "services": {
        "es":{ 
            "title": "SERVICIOS",
            "description":[
                "Traducciones generales, técnicas y juradas inglés-español-inglés.",
                "Especialización en ciberseguridad,  informática y traducciones jurídicas.",
                'Presentaciones y documentación para empresas',
                'Contratos',
                'Certificados académicos',
                'Documentación de divorcio y adopciones',
                 "Calidad y cumplimiento de los plazos",
                 "Presupuesto gratuito en 24 horas Traducciones urgentes"
                ]
            },
        "en":{
            "title": "SERVICES",
            "description": [
                "General, technical, legal and sworn translations English-Spanish-English",
                "Specialization in Cybersecurity, Computer Science and legal translations (also sworn/certified translations)",
                'Presentations',
                'Contracts', 
                'Internal documents for companies', 
                'Other translations: Academic Certificates, divorce documentation or adoptions',
                "Quality and adherence to deadlines",
                "Free quote within 24 hours Urgent translations"
                ]
        }
    },
    "features": {
        "es": {
            "title": "CLIENTES DESTACADOS",
            "description":[
                "CNI Centro Nacional Inteligencia",
                "CCN Centro Criptológico Nacional",
                "Museo de Ciencias Naturales Madrid",
                "Telefónica. Departamento de Inteligencia en Seguridad",
                "Ayuntamiento Ibiza Departamento De Turismo",
                "InnmoTec System, Cybersecurity Intelegence"
            ]
           
        },
        "en": {
            "title": "OUTSTANDING CUSTOMERS",
            "description":[
                "CNI Spanish National Intelligence Centre",
                "CCN Spanish National Cryptologic Centre",
                "Madrid’s Museum of Natural Sciences",
                "Department of Security Intelligence at Telefónica",
                "Tourism Department of Ibiza’s City Council",
                "InnmoTec System, Cybersecurity Intelegence",    
            ]
        }
    },
    "fees": {
        "es": {
            "title": "TARIFAS",
            "description": "Inglés-español-inglés $/EUR 0,08 (tarifa orientativa, negociable y sujeta a cambios. El precio final dependerá del tipo y la dificultad del texto original)"
        },
        "en": {
            "title": "FEES",
            "description": "English-Spanish-English $/EUR 0,08 (The fee is approximate, negotiable and subject to change. Final price will depend on the kind and difficulty of the source text)"
        }
    },
    "contact": {
        "es":{
            "title": "CONTACTO",
            "description": "No dudes en contactar para cualquier duda o presupuesto.",
            "formName":"Nombre:",
            "formEmail": "Correo electronico:",
            "formMessage": "Mensaje:",
            "formSubmit": "Enviar",
            "direction": config.OWNER_DIRECTION,
            "email": config.OWNER_EMAIL,
            "telephone": config.OWNER_TEL,
            "linkedin": config.OWNER_LINKEDIN
            },
        "en":{
            "title": "CONTACT",
            "description": "Do not hesitate to contact me for further information of free quote",
            "formName":"Name:",
            "formEmail": "Email:",
            "formMessage": "Message:",
            "formSubmit": "Submit",
            "direction": config.OWNER_DIRECTION,
            "email": config.OWNER_EMAIL,
            "telephone": config.OWNER_TEL,
            "linkedin": config.OWNER_LINKEDIN
            }
    }
};
