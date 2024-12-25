package db

import (
	"database/sql"
	"log"
)




func NewMySQLStorage(cfg mysql.Config)(*sql.DB , error ){
	db , err := sql.Open("mySql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}
	return db, nil
}
