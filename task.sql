CREATE TABLE scheduled_tasks (
    id INT NOT NULL AUTO_INCREMENT,
    taskName VARCHAR(255),
    execution_time timestamp,
    status VARCHAR(255),
    PRIMARY KEY (id)
);