export interface BaseDao<T>{
    create(dataObj:T);
    update(dataObj:T);
    delete(id:string)
    findAll();
}