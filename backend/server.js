const express = require("express");
const mysql = require("mysql"); // Import the mysql package
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "employeeinfo",
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM admin WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.send("failed");
      } else if (result.length > 0) {
        return res.send("success");
      } else {
        return res.send("failed");
      }
    }
  );
});

app.post("/create", (req, res) => {
  console.log(req.body.date);

  const { name, employeeid, email, date, country, position, wage } = req.body;

  const sql =
    "INSERT INTO datas (name, employeeid, email, date, country, position, wage) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [name, employeeid, email, date, country, position, wage],
    (err, result) => {
      if (err) {
        console.error("Error inserting data into the database: " + err.message);
        return res.status(500).json("Error");
      } else {
        console.log(result);
        console.log("Data inserted successfully");
        return res
          .status(200)
          .json({ result: "Employee created successfully." });
      }
    }
  );
});

// Assuming you have an Express app and a MySQL database connection (db) already set up
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM datas", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while fetching employee data." });
    } else {
      res.json(result);
    }
  });
});

app.put("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { country, position, wage } = req.body;

  const sql =
    "UPDATE datas SET country = ?, position = ?, wage = ? WHERE employeeid = ?";

  db.query(sql, [country, position, wage, id], (err, result) => {
    if (err) {
      console.error("Error updating data in the database: " + err.message);
      return res.status(500).json("Error");
    } else {
      console.log(result);
      console.log("Data updated successfully");
      return res.status(200).json({ result: "Employee updated successfully." });
    }
  });
});

app.get("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params.id);
  db.query("SELECT * FROM datas WHERE employeeid = ?", id, (err, result) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while fetching employee data." });
    } else if (result.length > 0) {
      res.json(result[0]);
      console.log(res);
    } else {
      res.status(404).json({ error: "Employee not found" });
      console.log(err);
    }
  });
});

// Add a new route to handle DELETE requests
app.delete("/delete/:employeeid", (req, res) => {
  const employeeid = req.params.employeeid;
  console.log("Deleting employee with id: " + employeeid);

  // Check if db is properly connected before handling the delete request
  if (!db) {
    console.error("Database connection not established");
    res.status(500).json({ error: "Database connection not established" });
    return;
  }

  const sql = `DELETE FROM datas WHERE employeeid = ${employeeid}`;
  console.log("SQL Query: " + sql);

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error deleting employee: " + err.message);
      res.status(500).json({ error: "An error occurred while deleting the employee." });
    } else {
      console.log("Delete operation result:", result);

      if (result.affectedRows > 0) {
        res.json({ message: "Employee deleted successfully" });
      } else {
        res.status(404).json({ error: "Employee not found" });
      }
    }
  });
});


app.listen(3001, () => {
  console.log("App listening on port 3001");
});

// CRUD: employees
/**
 * GET: /employees -> all record
 * POST: /employees -> create new employee record
 *
 * GET: /employees/:id -> single employee record
 * PUT: /employees/:id -> update employee record
 * DELETE: /employees/:id -> delete employee record
 */
