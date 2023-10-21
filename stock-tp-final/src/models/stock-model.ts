import db from '../database/stock.json'
import {writeFile}  from "jsonfile"
import { randomUUID } from 'node:crypto';

export default abstract class StockModel{
    private static async writeDB(){
        return writeFile('./database/stock.json', db)
    }

    static async getAll(){
        return db
    }

    static async getByName(descripcion:string){
        const consulta = descripcion.toLowerCase()

        return db.filter((stock)=>stock.descripcion.toLowerCase().includes((consulta).toLowerCase()))
    }
    // static async createStock(dataObj:any){
    //     const id = randomUUID()
    //     const {descripcion,color,talle,cantidad,precio}=await dataObj
    //     db.push(descripcion,color,talle,cantidad,precio)
    //     await writeFile('./src/database/stock.json',db)
    //     return{message: 'Stock created successfully',descripcion}
    // }

    static async createStock(data: any) {
		const { descripcion,color,talle,cantidad,precio} = data;

		const newStock = { descripcion,color,talle,cantidad,precio, id: '' };
		db.push(newStock);

		await this.writeDB();

		// En el caso de operación exitosa, sólo quiero devolver estos datos
		return { descripcion,color,talle,cantidad,precio };
	}

    // static async deleteByName(name:string){
    //     const chartIndex= db.charts.findIndex((chart:any) =>chart.name.toLowerCase()==name)
    //     const chartToBeDeleted= db.charts[chartIndex]
    //     if(chartIndex==-1)return {error:'chart not found'}
    //     db.charts.splice(chartIndex,1)
    //     await writeFile('./src/database/natal-charts.json', db)
    //     return {message: 'Deleted successfully',chart: chartToBeDeleted}
    
            
    // }

    // static async updateByName(dataObj:any){
    //     const {name,birthdate,time,asc,sun,moon,mercury,venus,mars,jupiter,saturn,uranus,neptune,pluto}= await dataObj
    //     if(name== undefined)return {error:"The name parameter is missing"}
    //     const foundChartIndex= db.charts.findIndex((chart:any)=>chart.name.toLowerCase()==name.toLowerCase())
    //     if(foundChartIndex==-1)return {error:"Name doesn't exists in db"}
    //     const chart=db.charts[foundChartIndex]
    //     if(birthdate) chart.birthdate=birthdate
    //     if(time) chart.time=time
    //     if(asc) chart.asc=asc
    //     if(sun) chart.sun=sun
    //     if(moon) chart.moon=moon
    //     if(mercury) chart.mercury=mercury
    //     if(venus) chart.venus=venus
    //     if(mars) chart.mars=mars
    //     if(jupiter) chart.jupiter=jupiter
    //     if(saturn) chart.saturn=saturn
    //     if(uranus) chart.uranus=uranus
    //     if(neptune) chart.neptune=neptune
    //     if(pluto) chart.pluto=pluto
        
    //     await writeFile('./src/database/natal-charts.json', db)
    //     return{message: 'Updated successfully',chart: chart}
    // }
}

console.log(StockModel.getByName("c"))
