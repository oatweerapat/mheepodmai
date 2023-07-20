import { Injectable } from '@angular/core';
import * as mysql from 'mysql2/promise'

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private connection: any;

  constructor() { 
    this.connect();
  }

  private async connect() {
    try {
      this.connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_pod'
      });
      console.log('Connected to MySQL database');
    } catch (error) {
      console.error('Error connecting to MySQL database', error);
    }
  }

  async query(sql: string, values?: any){
    try {
      const [results, fields] = await this.connection.execute(sql, values);
      return results;
    } catch (error) {
      console.error('Error executing MySQL query', error);
      throw error;
    }
  }

  async close() {
    await this.connection.end();
    console.log('MySQL connection closed');
  }
}
