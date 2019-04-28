export class Todo{
public id:number;

public description: string;
public  done:boolean;
public targetDate:Date;

    constructor(id,description,done,targetDate){
this.id=id;
this.description=description;
this.done=done;
this.targetDate=targetDate;

    }
}