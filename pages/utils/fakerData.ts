import { Page, Locator, Frame } from '@playwright/test';
import { faker } from '@faker-js/faker';
import nodemailer from 'nodemailer';
import * as Imap from 'imap';
import { connect } from 'imap-simple';
import LoginPage from '../login';

let randomOwnerEmail = "";
let randomAdminEmail = "";
let randomTeacherEmail = "";
let randomStudentEmail = "";

class FakerDataPage {
    page: Page;
    btnLogin: Locator;


    constructor(page: Page) {
        this.page = page;
    }

    async generateRandomEmail() {
        const email = faker.internet.email();
        return email;
    }

    async getEmailForOwnerRole(){
        randomOwnerEmail = await this.generateRandomEmail();
        return randomOwnerEmail;
    }

    async getEmailForAdminRole(){
        randomAdminEmail = await this.generateRandomEmail();
        return randomAdminEmail;
    }

    async getEmailForTeacherRole(){
        randomTeacherEmail = await this.generateRandomEmail();
        return randomTeacherEmail;
    }

    async getEmailForStudentRole(){
        randomStudentEmail = await this.generateRandomEmail();
        return randomStudentEmail;
    }

    async gerateRandomFirstName() {
        const firstName = faker.person.firstName();
        return firstName;
    }

    async gerateRandomLastName() {      
        const lastName = faker.person.lastName();
        return lastName;
    }

    async gerateRandomCompnyName() {
        return faker.company.name();
    }


}
export default FakerDataPage;