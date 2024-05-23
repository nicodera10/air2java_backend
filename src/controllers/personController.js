const { Person } = require('../models/person');

exports.getAllPersons = async (req, res) => {
  try {
      const persons = await Person.findAll();
  
      const formattedPersons = persons.map(person => {
          return {
              id_person: person.id_person,
              firstname: person.firstname_person,
              lastname: person.lastname_person,
              civil_status: person.civil_status_person,
              address_1: person.address_1_person,
              address_2: person.address_2_person,
              phone: person.phone_person,
              email: person.email_person,
              birthdate: person.birthdate_person,
              id_responsibility: person.id_responsability_person,
              id_appuser: person.id_appuser,
              id_band: person.id_band,
              id_town: person.id_town
          };
      });
  
      res.json(formattedPersons);
    } catch (error) {
      console.error('Erreur lors de la récupération des personnes :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des personnes' });
    };
};
