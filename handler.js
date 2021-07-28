'use strict';
const { MongoClient } = require("mongodb");

module.exports.hello = async (event) => {
  
  
  try {
  
    const url = "";
    const dbName = "";
  
    const client = new MongoClient(url);
    await client.connect();
  
    const work = await client.db(dbName).collection("works").findOne({ _id: '6c5f270b5e1f454aaa845f0372841c09967341ed' });
  
    console.log('work', work);
    
    await client.close();
    
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v2.0! Your function executed successfully!'
        },
        null,
        2
      ),
    };
    
  } catch (e) {
    
    console.log(e);
    
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: e.message
        },
        null,
        2
      ),
    };
    
  }
  
};
