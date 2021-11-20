import axios from 'axios'


export const civilizations = async ( req, res ) =>{

    axios.get('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        .then(response => {
            return res.status(200).json({
                ok: true,
                msg: 'Data received',
                civilizations: response.data.civilizations
            })
        })
        .catch(error => {
            console.log(error);
            return res.status(200).json({
                ok: false,
                msg: 'data re',
                error
            })
        });
}