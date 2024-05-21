function skillsMember() {
    // Define an object that will be returned
    let member = {};

    // Define a private variable
    let skills = ['JavaScript', 'React', 'Node'];

    // Define a method on the object
    member.getSkills = function() {
        return skills;
    };

    // Return the object
    return member;
}