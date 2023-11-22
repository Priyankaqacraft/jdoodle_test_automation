import { test, expect } from '@playwright/test'
import { allure } from "allure-playwright"
import { type } from 'os';
import TeacherPage from '../../pages/User-Role and Permission/Teachers_page';

test.describe('LeftPanel', () => {

    let Teachers_page: TeacherPage;

    test.beforeEach(async ({ page }) => {
        Teachers_page = new TeacherPage(page);
        await Teachers_page.navigate();

    });

    test('Testcase_001_verifyAdvancedIDE_With_Techer Credential_Login.', async ({ page }) => {
        await allure.step("Step_001_Verify when user do login , landing page is dashboard and on dashboard fist section is 'My Project'.", async () => {
            await (Teachers_page.login()) ;
            await expect(page.getByText('My Projects')).toBeVisible();
            await Teachers_page.seeMoreLink.isVisible();
            await Teachers_page.arrowIcon.isVisible();
            await Teachers_page.eyeIcon.isVisible();
            await Teachers_page.trashIcon.isVisible();
        });
        await allure.step("Step_002_Verify when user click on arrow icon , it redirect user to IDE screen'.", async () => {
           await (Teachers_page.arrowIcon_Click());
           await expect(page.getByText('Online Java Compiler IDE')).toBeVisible();
           await (Teachers_page.dashboardbutton_Click())
            
        });
        await allure.step("Step_003_Verify when user click on eye icon , user should be able to view line of code in ‘Project Preview’ section'.", async () => {
            await (Teachers_page.eyeIcon_Click());
            await expect(page.getByText('Project Preview')).toBeVisible();
            await (Teachers_page.codePreviewSection).isVisible();
            await (Teachers_page.dashboardbutton_Click())
               
         
        });

    });
      /*  test('Testcase_002_verifyAdvancedIDE_With_Techer Credential_Login.', async ({ page }) => {
            await allure.step("Step_004_Verify when user do login , landing page is dashboard and on dashboard fist section is 'My Project'.", async () => {
                await (Teachers_page.login()) ;
                 await (Teachers_page.trashIcon_Click());
                 await (Teachers_page.deletebutton).isVisible();
                 await expect(page.getByText('Are you sure, do you want to delete this project?')).toBeVisible();
                 await (Teachers_page.closeButton_click());
                 await (Teachers_page.dashboardbutton_Click());


            });
            // code for 'Dashboard >> My Assignment' section
            await allure.step("Step_005_Verify when user do login , landing page is dashboard and on dashboard second section is 'My Assignment'.", async () => {
                await expect(page.getByText('My Assignments as a Student')).toBeVisible();
                await (Teachers_page.myAssignmentSeeMoreLink).isVisible();

            });
                   // code for 'Dashboard >> Platform Plan' section
             await allure.step("Step_006_Verify when user do login , landing page is dashboard and on dashboard third section is 'Platform Plan'.", async () => {
                    await expect(page.getByText('Platform Plan')).toBeVisible();
                    await expect(page.getByText('You are currently on a Team Plan')).toBeVisible();
                    await (Teachers_page.managePlankLink_Click());
            });
                 await allure.step("Step_007_Verify when user do login , 'Manage Plan' link from platform plan section , it redirect to plan page.", async () => {
                    await (Teachers_page.managePlankLink_Click());
                    await expect(page.getByText('Platform Plan')).toBeVisible();
                    await (Teachers_page.plansPageReactiveButton).isVisible();
                    await (Teachers_page.plansPageUpgradeLink).isVisible();
                    await (Teachers_page.dashboardbutton_Click());

                 });
             });

             test('Testcase_003_verifyAdvancedIDE_With_Techer Credential_Login.', async ({ page }) => {
                await allure.step("Step_008_Verify when user do login , on Dashboard 'API Plan' section should be there .", async () => {
                    await (Teachers_page.login()) ;
                    await expect(page.getByText('API Plan')).toBeVisible();
                    await (Teachers_page.seePlankLink_Click());
                    await expect(page.getByText('API Plan')).toBeVisible();
                    await (Teachers_page.apiPlanPageReactiveButton).isVisible();
                    await (Teachers_page.apiPlanPageUpgradeLink).isVisible();
                    await (Teachers_page.dashboardbutton_Click());
                });

                await allure.step("Step_009_Verify when user do login , on Dashboard 'My Institute' section should be there .", async () => {
                    
                    await expect(page.getByText('My Institute')).toBeVisible();
                    await (Teachers_page.virtualInstituteName).isVisible();
                    await (Teachers_page.numOfEnrolledStud).isVisible();
                    await (Teachers_page.numOfAssignment).isVisible();

                });
                await allure.step("Step_0010_Verify when user click on 'Create Assignment' button from 'My Assignment' section , it should redirect to 'Create assignment' page.", async () => {
                    await (Teachers_page.createAssignment_Click())
                    await expect(page.getByText('Create Assignment')).toBeVisible();
                    await (Teachers_page.dashboardbutton_Click());
                   
                });


             });
             test('Testcase_003_verifyAdvancedIDE_With_Techer Credential_Login.', async ({ page }) => {
                await allure.step("Step_0011_Verify when user do login , on Dashboard 'My Association' section should be there .", async () => {
                    await (Teachers_page.login()) ;
                    await expect(page.getByText('My Associations')).toBeVisible();
                    await (Teachers_page.myAssoSeeMoreLink_Click())
                    await expect(page.getByText('My Associations')).toBeVisible();
                    await (Teachers_page.associationName_Click());
                    await (Teachers_page.associationPage).isVisible();
                    await (Teachers_page.dashboardbutton_Click());

                });
                //left side menu code started
                await allure.step("Step_0012_Verify when user do login and click on 'virtual Institute >> My Institute',My institute detail should be there.", async () => {
                     await (Teachers_page.myInstituteOption_Click())
                     await (Teachers_page.virtualInstituteName).isVisible();
                     await (Teachers_page.myInstituteSeeMoreLink_Click());
                     await(Teachers_page.createAssignmentButton).isVisible();
                    });

                    await allure.step("Step_0013_Verify when user do login and click on 'virtual Institute >> My Institute',My institute detail should be there.", async () => {
                        await (Teachers_page.myInstituteOption_Click())
                        await expect(page.getByText('User Management')).toBeVisible();
                    

                    });
                    await allure.step("Step_0014_Verify when user do login and click on 'virtual Institute >> My Institute[user management] - Manage button',It should redirect to 'User Management' page..", async () => {
                                await (Teachers_page.userMgmtManagebutton_Click());
                                await expect(page.getByText('User Management')).toBeVisible();
                                await (Teachers_page.userMgmtAddUserButton_Click());
                                await expect(page.getByText('Add User')).toBeVisible();
                    
                    });*/
                    
            });


             

        
    
    