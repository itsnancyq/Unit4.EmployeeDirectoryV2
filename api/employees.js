import express from "express"
import {employees, getEmployees} from "../db/employees"
const router = express.Router()

router.get("/", (req, res)=>{
    const employees = getEmployees()
    res.send(employees)
})

router.get("/random", (req,res)=>{
    const randomIndex = Math.floor(Math.random() * employees.length);
    res.send(employees[randomIndex]);
})

router.get("/:id", (req,res)=>{
    const { id } = req.params;

    
    // req.params are always strings, so we need to convert `id` into a number
    // before we can use it to find the employee
    const employee = employees.find((e) => e.id === +id);
  
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
  
    res.send(employee);
})

export default router