import stumodel from "./../models/studentmodel.js";

export const addstudent = async (req, res) => {
  try {
    const { name, rollnum } = req.body;
    console.log(name, rollnum);
    const newstudent = await stumodel.create({ name, rollnum });

    res.status(201).json(newstudent);
  } catch (error) {
    console.log("full errr", error);

    res.status(500).json({ message: error.message });
  }
};

export const getallstudents = async (req, res) => {
  try {
    const allstudent = await stumodel.find().sort({ createdAt: -1 });
    res.json(allstudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const toggleattendance = async (req, res) => {
  try {
    const student = await stumodel.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const updatestudnet = await stumodel.findByIdAndUpdate(req.params.id, {present: !student.present}, {new:true})

    res.json(updatestudnet)
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletestudent = async (req, res) => {
  console.log(req.params.id);
  
  try {
    await stumodel.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
