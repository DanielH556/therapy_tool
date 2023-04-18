import { Request, response, Response } from 'express';

export default {
    // Últimos dias
    async ultimosDias(req: Request, res: Response) {
        const idpac = req.params.id
        const ultimosDiasFetch = await fetch(`http://127.0.0.1:8080/ultimos_dias?idpac=${idpac}`)
            .then(function (response) {return response.json()})
        
        var ultimos_dias = ultimosDiasFetch
        res.send(ultimos_dias);
    },

    // Wordcloud
    async wordcloud(req: Request, res: Response) {
        const idpac = req.params.id
        const wordcloudFetch = await fetch(`http://127.0.0.1:8080/wordcloud?idpac=${idpac}`)
            .then(function (response) {return response.blob()})
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob)
            })
            .catch(error => {
                console.error(error)
            })
        
        var wordcloud = wordcloudFetch
        res.send(wordcloud)
    }
}