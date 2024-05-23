const validate=(schema)=> async(req,res,next)=>{

    try {

        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
        
    } catch (err) {
        //console.log(err);
        const status=422;
        const message="Fill in the form/inputs properly";
        const extraDetails=err.errors[0].message

        const error={
            status,
            message,
            extraDetails
        }

        //console.log(message);
        //res.status(400).json({msg:error});
       //console.log(error);

        next(error);
    }
}

export default validate;