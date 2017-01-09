'use strict';

const config = require('../config');

module.exports = {
    "appName": config.APP_NAME,
    "menu": {
        "es": ["Servicios","Clientes Destacados","Tarifas","Contacto"],
        "en": ["Services","Outstanding Clients","Fees","Contact"]
    },
    "banner": {
        "es": ["Traductora jurado de inglés", "Nombrada por el Ministerio de Asuntos Exteriores", "Más de diez años de experiencia", "SERVICIOS"],
        "en": ["English sworn/certified translator","Accredited by the Spanish Ministry of Foreign Affairs and Cooperation", "More than 10 years of experience", "SERVICES"]

    },
    "services": {
        "es":{ 
            "title": "SERVICIOS",
            "description":[
                "Traducciones generales, técnicas y juradas inglés-español-inglés.",
                "Especialización en ciberseguridad,  informática y traducciones jurídicas/jurado u oficiales.",
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
                "General, technical, legal and sworn/certified translations English-Spanish-English",
                "Specialization in Cybersecurity, IT, legal translations and sworn/certified translations",
                'Presentations and documentation for companies',
                'Legals contracts', 
                'Academic certificates', 
                'Divorce and adoption documentation',
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
                "InnmoTec System, Cybersecurity Intelligence"
            ]
           
        },
        "en": {
            "title": "OUTSTANDING CUSTOMERS",
            "description":[
                "CNI Spanish National Intelligence Centre",
                "CCN Spanish National Cryptologic Centre",
                "Madrid’s Museum of Natural Sciences",
                "Department of Security Intelligence at Telefónica",
                "Ibiza’s City Council",
                "InnmoTec System, Cybersecurity Intelligence",    
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
            "description": "Do not hesitate to contact me for further information or free quote",
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
