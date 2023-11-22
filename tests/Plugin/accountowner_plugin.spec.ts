import { test, expect } from '@playwright/test'
import { allure } from "allure-playwright"
import exp from 'constants';
import LoginPage from '../../pages/login';
import StudentsAPI from '../../pages/API/students_api_page';
import TeachersPlugin from '../../pages/Plugin/teachers_plugin_page';


test.describe.serial('AccountOwnerPlugin', () => {

    let teachers_plugin_page: TeachersPlugin;
    let loginPage: LoginPage;
    let students_api_page: StudentsAPI;


    test.beforeEach(async ({ page }) => {
        teachers_plugin_page = new TeachersPlugin(page);
        await teachers_plugin_page.navigate();

        loginPage = new LoginPage(page);
        students_api_page = new StudentsAPI(page);
    });

    test('Testcase_001_Verify_API_With_Login.', async ({ page }) => { 
        await allure.step("Step_001_Verify_Enter Login Details", async () => {
        }); 
        await loginPage.loginWithValidCredentials("stu@test.co", "Test123");

        await allure.step("Step_002_Verify_Teachers_TeamPlan", async () => {
        });

        await teachers_plugin_page.btnClick_Dashboard();
        await teachers_plugin_page.btnClick_Plugin();
        await teachers_plugin_page.textUsername.isVisible();
        await students_api_page.textAccountDetails.isVisible();
        await students_api_page.textClientId.isVisible();
        await teachers_plugin_page.textActivePlan.isVisible();
        await teachers_plugin_page.textTeamPlan.isVisible();
        await allure.step("Step_003_Verify_Teachers_MyPlugin", async () => {
        });
        await teachers_plugin_page.btnClick_ViewEdit();
        await teachers_plugin_page.textPluginName.isVisible();
        await teachers_plugin_page.btnClick_Clone();
        await teachers_plugin_page.textSuccess.isVisible();
        await teachers_plugin_page.textareaCommandLine.isVisible();
        await teachers_plugin_page.btnCopytoClipboard.isVisible();
        await teachers_plugin_page.btnClick_ShowEmbedCode();
        await teachers_plugin_page.textEmbedCode.isVisible();

    });    
    test('Testcase_002_Create Plugin.', async ({ page }) => { 
        await allure.step("Step_001_Verify_Enter Login Details", async () => {
        }); 
        await loginPage.loginWithValidCredentials("stu@test.co", "Test123");   

        await allure.step("Step_002_Create New Plugin", async () => {
        });
        await teachers_plugin_page.btnClick_CreateNewPlaugin();
        // await students_api_page.switchToFrameByXpath(students_api_page.frameLocator);
        await teachers_plugin_page.input_PlauginName('NewPlugin');
        await teachers_plugin_page.input_Description('Test');
        await teachers_plugin_page.btnClick_CreatePlugin();
        
        await allure.step("Step_003_Verify_Created_Plugin_Page_Left_Side", async () => {
        });
        await teachers_plugin_page.breadCrumb.isVisible();
        await teachers_plugin_page.textBetaVersion.isVisible();
        await teachers_plugin_page.textPluginName.isVisible();
        await teachers_plugin_page.textdescription.isVisible();
        await teachers_plugin_page.textCreatedOn.isVisible();
        await teachers_plugin_page.textLastEditOn.isVisible();
        await teachers_plugin_page.btnClick_Rename();
        // await students_api_page.switchToFrameByXpath(students_api_page.frameLocator);
        await teachers_plugin_page.input_PlauginName('ABC');
        await teachers_plugin_page.input_Description('TEST');
        await teachers_plugin_page.btnClick_RenamePlugin();   
        await teachers_plugin_page.btnClick_Delete();
        await teachers_plugin_page.btnNo.isVisible();
        await teachers_plugin_page.btnClick_Yes();
        await teachers_plugin_page.btnClick_Deactivate();
        await teachers_plugin_page.btnAcivate.isVisible();
        await teachers_plugin_page.dropdownlanguage.isVisible();
        await teachers_plugin_page.dropdownVersion.isVisible();
        await teachers_plugin_page.textComponents.isVisible();
        await teachers_plugin_page.textHeader.isVisible();
        await teachers_plugin_page.textFile.isVisible();
        await teachers_plugin_page.featureGetCode.isVisible();
        await teachers_plugin_page.featureSetCode.isVisible();
        await teachers_plugin_page.featureExecute.isVisible();
        await teachers_plugin_page.featureGetFiles.isVisible();
        await teachers_plugin_page.Drag_and_Drop_Components();
        await teachers_plugin_page.Drag_and_Drop_Functional_Features();

        await allure.step("Step_004_Verify_Created_Plugin_Page_Right_Side", async () => {
        });
        
        await teachers_plugin_page.textareaprogram.isVisible();
        await teachers_plugin_page.dropdownversion2.isVisible();
        await teachers_plugin_page.checkboxInteractive.isVisible();
        await teachers_plugin_page.textareaStdin.isVisible();
        await teachers_plugin_page.textareaCommandLine.isVisible();
        await teachers_plugin_page.btnExecute.isVisible();
        await teachers_plugin_page.btnUpload.isVisible();
        await teachers_plugin_page.textareaResult.isVisible();
        await teachers_plugin_page.btnClick_SavePlugin();
        await expect(page.getByText('Plugin saved successfully.')).toBeVisible();
        await teachers_plugin_page.btnReset.isVisible();

    });
});    