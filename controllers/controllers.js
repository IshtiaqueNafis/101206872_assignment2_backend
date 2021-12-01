

//region @desc get all employees,@route -->GET /employees @acess PUBLIC
exports.getEmployees = (req, res, next) => {
    res.status(200).json();
}
//endregion

//region @desc get single employees,@route -->GET /employees/:id @acess PUBLIC
exports.getEmployee = (req, res, next) => {
    res.status(200).json();
}
//endregion


//region @desc Update single employees,@route -->PUT /employees @acess Private
exports.createEmployee = (req, res, next) => {
    res.status(200).json();
}
//endregion


//region @desc Update single employees,@route -->PUT /employees/:id @acess Private
exports.updateEmployee = (req, res, next) => {
    res.status(200).json();
}
//endregion


//region @desc Update single employees,@route -->delete /employees/:id @acess Private
exports.deleteEmployee = (req, res, next) => {
    res.status(200).json();
}
//endregion