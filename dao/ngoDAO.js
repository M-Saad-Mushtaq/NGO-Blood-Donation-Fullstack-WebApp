const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

// import { MongoClient, ObjectId } from "mongodb";  // this can be used in place of above 2 lines

let users
let admin
let staff
let staffReview
let centerReview
let acceptorDonor
let patients
let appointment

class ngoDAO {
  static async injectDB(conn) {
    if (users && admin && staff && staffReview && centerReview && acceptorDonor  && patients && appointment) {
      return
    }
    try {
      users = await conn.db("ngodb").collection("users");
      admin = await conn.db("ngodb").collection("admin");
      staff = await conn.db("ngodb").collection("staff");
      staffReview = await conn.db("ngodb").collection("staffReview");
      centerReview = await conn.db("ngodb").collection("centerReview");
      acceptorDonor = await conn.db("ngodb").collection("bloodInventory");
      patients = await conn.db("ngodb").collection("patients");
      
      appointment = await conn.db("ngodb").collection("appointment");

    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }
}

class usersDAO {
  static async addUser(user) {
    try {
      console.log("Adding User")
      return await users.insertOne(user)
    } catch (e) {
      console.error(`Unable to post User: ${e}`)
      return { error: e }
    }
  }

  static async getUser(id, pass) {
    try {
      return await users.findOne({ id: id,password: pass} )
    } catch (e) {
      console.error(`Unable to get user: ${e}`)
      return { error: e }
    }
  }

  static async getUserbyId(id) {
    try {
      return await users.findOne({ id: id } )
    } catch (e) {
      console.error(`Unable to get user: ${e}`)
      return { error: e }
    }
  }

  static async updateUser(id,user) {
    try {
      console.log(user);
      const updateResponse = await users.updateOne(
        { id: parseInt(id) },
        { $set: { email: user.email,
           contactNo: user.contactNo ,
           city : user.city,
           weight : user.weight,
           healthCard : user.healthCard,
           condition : user.condition,
           address : user.address,
           password : user.password
          } }
      )
      console.log(updateResponse);
      return updateResponse
    } catch (e) {
      console.error(`Unable to update user: ${e}`)
      return { error: e }
    }
  }
}

class adminDAO {
  static async getAdmin(id, pass) {
    try {
      return await admin.findOne({ id: id,password: pass} )
    } catch (e) {
      console.error(`Unable to get admin: ${e}`)
      return { error: e }
    }
  }
}

class staffDAO {
  static async addStaff(staffs) {
    try {
      console.log("Adding Staff")
      return await staff.insertOne(staffs)
    } catch (e) {
      console.error(`Unable to post staff: ${e}`)
      return { error: e }
    }
  }

  static async getStaff(id, pass) {
    try {
      return await staff.findOne({ id: id,password: pass} )
    } catch (e) {
      console.error(`Unable to get staff: ${e}`)
      return { error: e }
    }
  }
}

class staffReviewDAO {
  static async addReview(review) {
    try {
      console.log("Adding Staff Review")
      return await staffReview.insertOne(review)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
    }
  }

  static async getReviews() {
    try {
      const cursor = await staffReview.find({});
      return cursor.toArray();
    } catch (e) {
      console.error(`Unable to get staff reviews: ${e}`)
      return { error: e }
    }
  }
}

class centerReviewDAO {
  static async addReview(review) {
    try {
      console.log("Adding Center Review")
      return await centerReview.insertOne(review)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
    }
  }

  static async getReviews() {
    try {
      const cursor = await centerReview.find({});
      return cursor.toArray();
    } catch (e) {
      console.error(`Unable to get staff reviews: ${e}`)
      return { error: e }
    }
  }
}

class acceptorDonorDAO {
  static async getData(city,btype,ptype) {
    try {
      const cursor = await acceptorDonor.find({city: city, bloodtype: btype, patientType: ptype});
      return cursor.toArray();
    } catch (e) {
      console.error(`Unable to get staff reviews: ${e}`)
      return { error: e }
    }
  }

  static async setAppoint(appoint) {
    try {
      return await appointment.insertOne(appoint);
    } catch (e) {
      console.error(`Unable to post appointment : ${e}`)
      return { error: e }
    }
  }

  static async getAppointment(id) {
    try {
      const cursor = await appointment.find({id: id});
      return cursor.toArray();
    } catch (e) {
      console.error(`Unable to get staff reviews: ${e}`)
      return { error: e }
    }
  }

}

class healthcardDAO {
  static async addCard(card) {

    try {
      console.log(card);
      const updateResponse = await users.updateOne(
        { id: parseInt(card.id) },
        { $set: { healthCard : card.healthcardId} }
      )
      console.log(updateResponse);
      return updateResponse
    } catch (e) {
      console.error(`Unable to update healthcard: ${e}`)
      return { error: e }
     }
   }
}

class patientDAO {
  static async addPatient(patient) {
    try {
      console.log("Adding Patient")
      patient.id = parseInt(patient.id);
      return await patients.insertOne(patient)
    } catch (e) {
      console.error(`Unable to post Patient: ${e}`)
      return { error: e }
    }
  }

  static async getResult(id) {
    try {
      return await patients.findOne({id: parseInt(id) });
    } catch (e) {
      console.error(`Unable to get Result : ${e}`)
      return { error: e }
    }
  }
}


module.exports = {
  ngoDAO,
  usersDAO,
  adminDAO,
  staffDAO,
  staffReviewDAO,
  centerReviewDAO,
  acceptorDonorDAO,
  healthcardDAO,
  patientDAO
};