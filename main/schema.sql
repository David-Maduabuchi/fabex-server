CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    tid VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    amount NUMERIC NOT NULL,
    asset VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    tx_state VARCHAR(50) NOT NULL
);
CREATE TABLE login (
    uid SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    date_created DATE DEFAULT CURRENT_DATE,
    job_description VARCHAR(255) NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,         
    name VARCHAR(100) NOT NULL,    
    gender VARCHAR(10) NOT NULL,    
    location VARCHAR(100),          
    email VARCHAR(100) NOT NULL UNIQUE,
    date DATE NOT NULL,             
    trx_vol VARCHAR(50)
);

ALTER TABLE transactions ADD COLUMN approved_by VARCHAR(255) DEFAULT NULL;



-- DUMMY VALUES FOR OUR PROJ
INSERT INTO login (username, email, password, job_description)
VALUES
('sarah', 'sarah@gmail.com', 'cookies', 'manager'),
('john', 'john@gmail.com', 'cookies', 'employee');
