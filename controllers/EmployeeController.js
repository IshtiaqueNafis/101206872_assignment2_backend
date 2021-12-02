const Employees = require('../models/EmployeeModel')


//region @desc get all employees,@route -->GET /employees @acess PUBLIC
exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await Employees.find();


        res.status(200).json({
            success: true,
            count: employees.length,
            data: employees
        });

    } catch (err) {
        res.status(400).json({
            success: false
        })
    }
}
//endregion

//region @desc get single employees,@route -->GET /employees/:id @acess PUBLIC
exports.getEmployee = async (req, res, next) => {

    try {
        const employee = await Employees.findById(req.params.id);

        if (!employee) {
            return res.status(400).json({
                success: false
            })
        }

        res.status(200).json({
            success: true,
            data: employee

        })

    } catch (e) {
        res.status(400).json({
            success: false

        });
    }


}
//endregion


//region @desc Update single employees,@route -->PUT /employees @acess Private
exports.createEmployee = async (req, res, next) => {


    try {
        const employee = await Employees.create(req.body);
        res.status(201).json({
            success: true,
            data: employee
        });
    } catch (err) {
        res.status(400).json({
            success: false
        })
    }


}
//endregion


//region @desc Update single employees,@route -->PUT /employees/:id @acess Private
exports.updateEmployee = async (req, res, next) => {
    try {
        const employee = await Employees.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if (!employee) {
            return res.status(400).json({
                success: false
            })
        }


        res.status(200).json({
            success: true,
            data: employee
        });
    } catch (e) {
        res.status(400).json({
            success: false
        })
    }


}
//endregion


//region @desc Update single employees,@route -->delete /employees/:id @acess Private
exports.deleteEmployee = async (req, res, next) => {
    try {
        const employee = await Employees.findByIdAndDelete(req.params.id);

        if (!employee) {
            return res.status(400).json({
                success: false
            })
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (e) {
        res.status(400).json({
            success: false
        })
    }

}

//endregion