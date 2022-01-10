import * as dynamoDb from "@aws-sdk/client-dynamodb";
import * as types from '@el/vs-types/src/types';

const dynamoClient = new dynamoDb.DynamoDBClient({})

export const getItem = async(id:string,tableName:string) : Promise<types.dynamoObject>  => {

    var params = {
        TableName: '',
        Key: { 
            id:id
        }
    }

    dynamoClient.send(new dynamoDb.GetItemCommand({  }))

    return Promise.resolve({id:"1"})

}

export const getAll = async() : Promise<types.dynamoObject[]> => {
    return Promise.resolve([])
}

export const saveItem = async(item:types.dynamoObject) : Promise<void> => {

}

export const deleteItem = async(item:types.dynamoObject) : Promise<void> => {

}