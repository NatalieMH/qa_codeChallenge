import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    });
  });
  it("can add another new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "Natalie Halloran",
      phone: "6175551234",
      title: "QA",
    });
    await em.saveChanges();
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toBe("Natalie Halloran");
    expect(employee.phone).toBe("6175551234");
    expect(employee.title).toBe("QA");
  });
  it("can cancel an edit of an employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({
      name: "Natalie M Halloran",
      phone: "6175555555",
      title: "Automation Engineer"
    });
    await em.cancelChanges();
    let employee1 = await em.getEmployeeInfo();
    expect(employee1.name).toBe("Bernice Ortiz");
    expect(employee1.phone).toBe("4824931093");
    expect(employee1.title).toBe("CEO");
  });
  it("can navigate away without saving", async () => {
    await em.selectEmployeeByName("Dollie Berry");
    await em.editEmployee({
      name: "Charlotte Halloran",
      phone: "6175431234",
      title: "Mom"
    });
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Dollie Berry");
    let employee2 = await em.getEmployeeInfo();
    expect(employee2.name).toBe("Dollie Berry");
    expect(employee2.phone).toBe("4873459812");
    expect(employee2.title).toBe("Front-End Developer");
  });
});
