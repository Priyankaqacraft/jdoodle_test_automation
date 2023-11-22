import { Page, Locator, Frame } from '@playwright/test';
import { faker } from '@faker-js/faker';
import nodemailer from 'nodemailer';
import * as Imap from 'imap';
import { connect } from 'imap-simple';
import LoginPage from '../login';
import FakerDataPage from '../utils/fakerData';

const config = {
  imap: {
    user: '56f19369617103',
    password: 'af98acebc30e93',
    host: 'sandbox.smtp.mailtrap.io',
    port: 993, // Use the correct port provided by Mailtrap (usually 993 for IMAP)
    tls: true,
  },
};

let randomOwnerEmail = "";
let randomAdminEmail = "";
let randomTeacherEmail = "";
let randomStudentEmail = "";
let fakerDataPage: FakerDataPage;

class RegisterPage {

  page: Page;
  btnLogin: Locator;
  linkSignup: Locator;
  inputEmail: Locator;
  inputDisplayName: Locator;
  inputPassword: Locator;
  inputConfirmPassword: Locator;
  btnSignup: Locator;
  registerSuccessMessage: Locator;
  captcha: Locator;


  instanceofLogin: LoginPage;
  fakerDataPage: FakerDataPage;
  instuteCode: Locator;
  instituteName: Locator;
  instiruteFirstName: Locator;
  instituteLastName: Locator;
  instituteDescription: Locator;
  btnCreateInstitute: Locator;
  menu_MyInstiute: Locator;
  manageUsers: Locator;
  addUser: Locator;
  addUserEmail: Locator;
  addUserFirstName: Locator;
  addUserLastName: Locator;
  addUserButton: Locator;
  btnAddRole: Locator;
  select_box_Role: Locator;
  btnDadhboard: Locator;
  inputSerach: Locator;
  searchUserResult: Locator;

  constructor(page: Page) {

    //Page Locators 

    this.page = page;
    this.btnLogin = page.locator('//button//div[text()=" Login "]')
    this.linkSignup = page.locator('(//button[text()=" Sign Up "])[1]')
    this.inputEmail = page.locator('//input[contains(@id,"joeDoe@example.com")]')
    this.inputDisplayName = page.locator('//input[contains(@id,"Display Name")]')
    this.inputPassword = page.locator('//input[@id="register_pwd"]')
    this.inputConfirmPassword = page.locator('//input[contains(@id,"Confirm Password")]')
    this.btnSignup = page.locator('//input[contains(@id,"Confirm Password")]//following::button[1]')
    this.registerSuccessMessage = page.locator('//p[text()="Thanks for registering to JDoodle."]')
    this.captcha = page.locator('(//span[@id="recaptcha-anchor"]//div)[1]')
    this.btnDadhboard = page.locator('//span[text()="Dashboard"]')

    //Page Objects for Create New Institute
    this.instuteCode = page.locator('//input[@placeholder="XYZSCHOOL"]')
    this.instituteName = page.locator('//input[@placeholder="XYZ School"]')
    this.instiruteFirstName = page.locator('//input[@id="First Name"]')
    this.instituteLastName = page.locator('//input[@id="Last Name"]')
    this.instituteDescription = page.locator('//textarea[@placeholder="Short description about your institute."]')
    this.btnCreateInstitute = page.locator('//button[text()=" Create Institute "]')

    //Page Objects for Left side Menu Click
    this.menu_MyInstiute = page.locator('//a[text()=" My Institute "]')
    this.manageUsers = page.locator('(//a[text()="Manage"])[1]')
    this.addUser = page.locator('//button[text()="Add User"]')


    //Page Objects for Add new user
    this.addUserEmail = page.locator('//input[@placeholder="Email"]')
    this.addUserFirstName = page.locator('//input[@placeholder="First Name"]')
    this.addUserLastName = page.locator('//input[@placeholder="Last Name"]')
    this.btnAddRole = page.locator('//button[text()=" Add Role "]')
    this.addUserButton = page.locator('//button[text()=" Add User "]')
    this.select_box_Role = page.locator('//select[@default="Select"]')

    this.instanceofLogin = new LoginPage(page);
    this.fakerDataPage = new FakerDataPage(page);
    //page.setViewportSize({ width: 1920, height: 1080 })

    this.inputSerach = page.locator('//input[@placeholder="Search"]')
    this.searchUserResult = page.locator('//table//tbody//tr')

  }


  async navigate() {
    await this.page.goto('/');

  }

  /**
   * This method is used to register a new (Owner) account.
   */
  async RegisterNewAccount_Owner() {

    await this.btnLogin.click();
    await this.linkSignup.click();
    await this.inputEmail.fill(await this.fakerDataPage.getEmailForOwnerRole());
    await this.inputDisplayName.fill(await this.fakerDataPage.gerateRandomFirstName());
    await this.inputPassword.fill("Test1234");
    await this.inputConfirmPassword.fill("Test1234");
    await this.page.frameLocator('(//iframe[@title="reCAPTCHA"])[2]').getByLabel('I\'m not a robot').click();
    await this.btnSignup.click();

    console.log("Below is login details for new Owner account : ");
    console.log("============================================== ");
    console.log("Email is : " + randomOwnerEmail);
    console.log("Password is :  Test1234");
    //Verify Email from Inbox : TBD

  }
  /**
   * This method is used to register a new (Admin) account.
   */
  async AddNewUser_Admin() {
    randomAdminEmail = await this.fakerDataPage.getEmailForAdminRole();
    await this.addUserEmail.fill(randomAdminEmail);
    await this.addUserFirstName.fill(await this.fakerDataPage.gerateRandomFirstName());
    await this.addUserLastName.fill(await this.fakerDataPage.gerateRandomLastName());
    await this.select_option_From_Dropdown(this.select_box_Role, "Institute Admin");
    await this.btnAddRole.click();
    await this.btnAddRole.click();
    await this.addUserButton.click();
    await this.page.waitForTimeout(3000);
    console.log("Below is login details for new Admin account : ");
    console.log("============================================== ");
    console.log("Email is : " + randomAdminEmail);
    console.log("Password is :  Test1234");
   
  }

  async searchAdminUser() {

    await this.page.waitForTimeout(1000);
    await this.inputSerach.fill(randomAdminEmail);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(1000);

  }

  async gotoAddUserPage() {

    //await this.menu_MyInstiute.click();
    //await this.manageUsers.click();
    this.page.goto('https://dev01.jdoodle.com/dashboard/institution/1478596325/users');
    await this.addUser.click();

  }

  /**
   * This method is used to register a new (Teacher) account.
   */
  async AddNewUser_Teacher() {
    randomTeacherEmail = await this.fakerDataPage.getEmailForTeacherRole();
    await this.addUserEmail.fill(randomTeacherEmail);
    await this.addUserFirstName.fill(await this.fakerDataPage.gerateRandomFirstName());
    await this.addUserLastName.fill(await this.fakerDataPage.gerateRandomLastName());
    await this.select_option_From_Dropdown(this.select_box_Role, "Teacher");
    await this.btnAddRole.click();
    await this.btnAddRole.click();
    await this.addUserButton.click();
    await this.page.waitForTimeout(3000);
    console.log("Below is login details for new Teacher account : ");
    console.log("============================================== ");
    console.log("Email is : " + randomTeacherEmail);
    console.log("Password is :  Test1234");

  }

  async searchTeacherUser() {
    await this.page.waitForTimeout(1000);
    await this.inputSerach.fill(randomTeacherEmail);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(1000);
  }



  /**
   * This method is used to register a new (Student) account.
   */
  async AddNewUser_Student() {
    randomStudentEmail = await this.fakerDataPage.getEmailForStudentRole();
    await this.addUserEmail.fill(randomStudentEmail);
    await this.addUserFirstName.fill(await this.fakerDataPage.gerateRandomFirstName());
    await this.addUserLastName.fill(await this.fakerDataPage.gerateRandomLastName());
    await this.select_option_From_Dropdown(this.select_box_Role, "Student");
    await this.btnAddRole.click();
    await this.btnAddRole.click();
    await this.addUserButton.click();
    await this.page.waitForTimeout(3000);
    console.log("Below is login details for new Student account : ");
    console.log("============================================== ");
    console.log("Email is : " + randomStudentEmail);
    console.log("Password is :  Test1234");

  }

  async searchStudentUser() {
    await this.page.waitForTimeout(1000);
    await this.inputSerach.fill(randomStudentEmail);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(1000);
  }


  /** 
   * This method is used to login a new admin account.
   * It uses the login method from LoginPage class to login to the application.
   */
  async loginToApplication_admin() {

    this.instanceofLogin.loginWithValidCredentials("admin@jdvi.co", "asdf123");
  }

  /** 
   * This method is used to login a new teacher account.
   * It uses the login method from LoginPage class to login to the application.
   */
  async loginToApplication_teacher() {

    this.instanceofLogin.loginWithValidCredentials("  ", "asdf123");
  }

  /** 
   * This method is used to login a new student account.
   * It uses the login method from LoginPage class to login to the application.
   */
  async loginToApplication_student() {

    this.instanceofLogin.loginWithValidCredentials("  ", "asdf123");
  }

  async createNew_Institute() {
    const instCode = await this.fakerDataPage.gerateRandomCompnyName();

    await this.instuteCode.fill(instCode);
    await this.instituteName.fill(instCode);
    await this.instiruteFirstName.fill(await this.fakerDataPage.gerateRandomFirstName());
    await this.instituteLastName.fill(await this.fakerDataPage.gerateRandomLastName());
    await this.instituteDescription.fill("This is a test institute created by automation script.");
    await this.btnCreateInstitute.click();
    await this.page.reload();
  }

  async select_option_From_Dropdown(dropdown: Locator, option: string) {
    await dropdown.selectOption({ label: option });
  }

  async readEmails() {
    try {
      const connection = await connect(config);
      await connection.openBox('INBOX');
      const searchCriteria = ['ALL'];
      const fetchOptions = {
        bodies: ['HEADER', 'TEXT'],
        struct: true,
      };

      const messages = await connection.search(searchCriteria, fetchOptions);

      for (const message of messages) {
        const header = message.parts.find((part) => part.which === 'HEADER');
        const text = message.parts.find((part) => part.which === 'TEXT');
        console.log('Email Headers:', header.body);
        console.log('Email Text:', text.body);
        console.log('------------------------');
      }

      connection.end();
    } catch (error) {
      console.error('Error reading emails:', error);
    }
  }

  
  








}

export default RegisterPage;

