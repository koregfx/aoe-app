import fs from "fs"

const file = './db/data.json'

export const loadData = () => {

    try {
        if(!fs.existsSync(file))
        {
            return []
        }
        const data = fs.readFileSync(file, { encoding: "utf-8" })
        const info = JSON.parse(data)
        return info
    } catch (error) {
        console.log(error)
        throw new Error('Error reading DB')
    }
}



export const saveData = (data) => {
    if(!fs.existsSync(file))
    {
        fs.appendFileSync(file, JSON.stringify(data))
    }
    fs.writeFileSync(file, JSON.stringify(data));
    const info = JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }))
    return info
};