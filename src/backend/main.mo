import Array "mo:core/Array";
import Map "mo:core/Map";

import Nat "mo:core/Nat";


actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    date : Text;
    flightType : Text;
    message : Text;
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var inquiryId = 0;

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, date : Text, flightType : Text, message : Text) : async Nat {
    let id = inquiryId;
    let newInquiry : Inquiry = {
      name;
      phone;
      date;
      flightType;
      message;
    };
    inquiries.add(id, newInquiry);
    inquiryId += 1;
    id;
  };

  public query ({ caller }) func getInquiryCount() : async Nat {
    inquiries.size();
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray();
  };
};
