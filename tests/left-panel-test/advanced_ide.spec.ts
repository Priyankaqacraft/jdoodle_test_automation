import { test, expect } from '@playwright/test'
import AdvancedIdePage from '../../pages/left-panel/advanced_ide_page';
import { allure } from "allure-playwright"
import { type } from 'os';

test.describe('LeftPanel', () => {

    let advanced_ide_page: AdvancedIdePage;

    test.beforeEach(async ({ page }) => {
        advanced_ide_page = new AdvancedIdePage(page);
        await advanced_ide_page.navigate();

    });

  /*test('Testcase_001_verifyAdvancedIDE_Without_Login.', async ({ page }) => {
        await allure.step("Step_001_Verify when user click on advancedIDE link, it redirect to AdvancedIDE compiler", async () => {
            
         await (advanced_ide_page.advancedIdeClick())
         await advanced_ide_page.advancedIdeHeading.isVisible();
        }); 
        await allure.step("Step_002_Verify firstfolder is there with 3 dots", async () =>{
        await advanced_ide_page.firstFolderClick();
        await advanced_ide_page.folderFirstDots.click()
        await expect (advanced_ide_page.folderFirstDots).toBeVisible();
       }); 
       await allure.step("Step_003_Verify home icon is there with MyClass.Java ", async () =>{
        await advanced_ide_page.mavenLibDisplay();
        await advanced_ide_page.mavenlibText.isVisible();
        //await expect (advanced_ide_page.mavenLibFolder).toHaveClass('style','')
       }); 
       await allure.step("Step_004_Verify By default, all the folders and files should have a 3-dot menu button.", async () =>{
            await expect(advanced_ide_page.myClassDots).toBeVisible();
            await expect(advanced_ide_page.folderFirstDots).toBeVisible();
            await expect (advanced_ide_page.mavenlibDots).toBeVisible();
            await expect(advanced_ide_page.libDots).toBeVisible();
            

         });

         await allure.step("Step_005_Verify when user click on mainfile>> New File, it opens newTextbox ,when click on submit it display required field validation message.", async () =>{
            await (advanced_ide_page.newFileClick_ForValidationMessage());
          
             //await  advanced_ide_page.newFileValidationMessage.isVisible();
            // await (advanced_ide_page.newFile_save());
             //await advanced_ide_page.newfileDynamicFolder.isVisible();
         });

         await allure.step("Step_006_Verify when user click on mainfolder>> new file >. Submit button , it created new folder", async () =>{

             await (advanced_ide_page.newFile_save());
             await advanced_ide_page.newfileDynamicFolder.isVisible();
             
            
         });

         await allure.step("Step_007_Verify when user click on mainfolder>> New File>>cancel button, popup window will get open with okay button", async () =>{
            await (advanced_ide_page.newFileClick_Delete_Popupwindow());
            await expect(advanced_ide_page.popupWindowText).toBeVisible;
             
         });

         await allure.step("Step_008_Verify when user enter invalid folder name '   abc', it display message 'invalid foldername'validation message ", async () =>{
         await (advanced_ide_page.newFolder_With_invalidName())
         await expect(advanced_ide_page.invalidValidationMessage).toBeVisible();
         await (advanced_ide_page.newfileClick_delete_PopupWinod_Okay());
         


         });

         await allure.step("Step_009_Verify when user enter invalid folder name with java extension 'folder.java', its mouse click effect is blue.", async () =>{
            await (advanced_ide_page.newFolder_With_JavaExtension());
            await advanced_ide_page.folderNameWithJavaExtension.isVisible();
            
         });
         await allure.step("Step_010_Verify when user enter invalid folder name with java extension 'folder.java', its mouse click effect is blue.", async () =>{
            await (advanced_ide_page.dynamicFolder_Dots_Click());
            //await advanced_ide_page.dynamicSubFolderStartfile.isVisible();
           // await advanced_ide_page.dynamicSubFolderRename.isVisible();
            //await advanced_ide_page.dynamicSubFolderDelete.isVisible();
           // await advanced_ide_page.dynamicSubFolderDownload.isVisible();
           await advanced_ide_page.clear2Cookies();
         });

        });*/

      /* test('Testcase_002_verifyAdvancedIDE_Without_Login.', async ({ page }) => {

             await allure.step("Step_011_Verify when user click on 'Make it as Start File', it removes option 'Make it as Start File'from 3 Dots", async () =>{
                
                //await advanced_ide_page.clear2Cookies();
                await (advanced_ide_page.advancedIdeClick())
                await (advanced_ide_page.newFolder_With_JavaExtension());
              await (advanced_ide_page.dynamicFolderStartFile_click());
              await expect(advanced_ide_page.dynamicSubFolderStartfile).toBeHidden();
            });

        });
        /*test('Testcase_003_verifyAdvancedIDE_Without_Login.', async ({ page }) => {
           await allure.step("Step_012_Verify when user create a folder[folder icon is there , home icon is not there] , and click on Trash icon then it should get delete", async () =>{
            //await (advanced_ide_page.dynamicSubFolderDeleteFolder());
            await (advanced_ide_page.advancedIdeClick())
            await (advanced_ide_page.newFolder_With_JavaExtension());
            await (advanced_ide_page.dynamicJavaExtensionFolder_Delete());
             await advanced_ide_page.deletePopWindowText.isVisible();
             //await expect(page.getByText('Are you sure want to delete this file?')).toBeVisible();
            await advanced_ide_page.deleteYesButton.isVisible();
            await (advanced_ide_page.deleteDynamicFolder());
             //await expect (advanced_ide_page.deleteNOButton).toBeVisible();
            });
        });
        test('Testcase_004_verifyAdvancedIDE_Without_Login.', async ({ page }) => {
          await allure.step("Step_013_Verify when user click on 'Make it as Start File', after that Delete icon ,it won't delete that created folder which marked as home icon] , and click on Trash icon then it should get delete", async () =>{
            await (advanced_ide_page.advancedIdeClick())    
            await (advanced_ide_page.newFolder_With_JavaExtension());
            await (advanced_ide_page.dynamicFolderStartFile_click());
           await (advanced_ide_page.dynamicSubfolderDelete_Folder());
            await advanced_ide_page.folderNameWithJavaExtension.isVisible();

            });
        });
       test('Testcase_005_verifyAdvancedIDE_Without_Login.', async ({ page }) => {
            await allure.step("Step_014_Verify when user click on 'Rename' , it allow to rename folder ] , and click on Trash icon then it should get delete", async () =>{
                await (advanced_ide_page.advancedIdeClick())    
                await (advanced_ide_page.newFile_save());
                await (advanced_ide_page.dynamicFolder_Dots_Click());
                await (advanced_ide_page.renameDynamicFolderDisplayValidationMessage());
                await expect(advanced_ide_page.newFileValidationMessage).toBeVisible();
                await (advanced_ide_page.popWindowOkButton_click)
                await (advanced_ide_page.newFolderCancelButtonClick());
                await (advanced_ide_page.renameFolderWithoutJavaExtension());
                await expect (advanced_ide_page.newfileDynamicFolder).toBeVisible();
   
            });
            await allure.step("Step_015_Verify when user clicks on the “Incoming arrow icon + Download” button, it downloads a Java file with the file name.", async () =>{
            
                await (advanced_ide_page.dynamicFolder_Dots_Click());
                await (advanced_ide_page.dynamicFolderDownloadButtonclick());
            });
        });

        test('Testcase_006_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
            await allure.step("Step_016_Verify when newFolder creation have validation 'Required filed validation.'", async () =>{
                await (advanced_ide_page.advancedIdeClick());
                await (advanced_ide_page.newFolderCreate());
                await (advanced_ide_page.newFolderSubmit());
                await advanced_ide_page.newFileValidationMessage.isVisible();
                await (advanced_ide_page.newFolderNameCancel_button())
            });
        });

        test('Testcase_007_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
            await allure.step("Step_017_Verify when newFolder created with invalid name , validation message displayed 'Invalid Name'", async () =>{
                   await (advanced_ide_page.advancedIdeClick());
                    await (advanced_ide_page.newFolderCreateInvalidName())
                    await expect (advanced_ide_page.invalidValidationMessage).toBeVisible()
                    await (advanced_ide_page.newFolderNameCancel_button())

            });

            await allure.step("Step_018_Verify when newFolder created with invalid name , validation message displayed 'Invalid Name'", async () =>{
                await (advanced_ide_page.newFolderwithValidName())
                await expect(advanced_ide_page.newfileDynamicFolder).toBeVisible();
                await(advanced_ide_page.newCreatedFolderClick()); // to display folder open-close effect while clicking

            });

        });
        test('Testcase_008_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
            await allure.step("Step_019_Verify when newFolder name entered and cancel button clicked, it won't create any folder.", async () =>{
                await (advanced_ide_page.advancedIdeClick());
                await (advanced_ide_page.newFolderNameCancelButton())
                await expect(advanced_ide_page.newfileDynamicFolder).toBeHidden();

            });
        });
       test('Testcase_009_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {

            await allure.step("Step_020_Verify Created folder have 3 dots and submenu.", async () =>{
                await (advanced_ide_page.advancedIdeClick());
                await (advanced_ide_page.firstFolderClick());
                await (advanced_ide_page.newFolderwithValidName());
                await (advanced_ide_page.dynamicFolder_Dots_Click());
                await advanced_ide_page.folderSubmenuNewFile.isVisible();

            });
        });
        test('Testcase_010_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
       
           await allure.step("Step_021_Verify Created folder have uploadFile option in menulist.", async () =>{
                await (advanced_ide_page.advancedIdeClick());
                await (advanced_ide_page.firstFolderClick());
                await (advanced_ide_page.newFolderwithValidName());
                await (advanced_ide_page.dynamicFolder_Dots_Click());
                //await (advanced_ide_page.newFolderUploadFile());

            });
        });
        test('Testcase_011_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
            await allure.step("Step_022_Verify Created 'MyClass.Java' have 3 option in menulist.", async () =>{
                await (advanced_ide_page.advancedIdeClick());
                await (advanced_ide_page.myClassDots_Click());
                await (advanced_ide_page.newFolderwithValidName());
                await (advanced_ide_page.dynamicFolder_Dots_Click());
                //await (advanced_ide_page.newFolderDownload());
            });
        });*/
        // work sarted on 06-11-23 for "Myclass.java".....
    /*  test('Testcase_011_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
            await allure.step("Step_023_Verify Created 'MyClass.Java' have 3 option in menulist.1. Delete, 2. Rename, 3.Download", async () =>{
                await (advanced_ide_page.advancedIdeClick());
                await (advanced_ide_page.myClassDots_Click());
                await expect(advanced_ide_page.myClassDeleteButton).toBeVisible();
                const myElement=advanced_ide_page.homeIcon
                if (await myElement.isVisible())
                {
                      await expect(advanced_ide_page.myClassJavaText).toBeVisible();
                }
                await expect(advanced_ide_page.myClassRenameButton).toBeVisible();
                await (advanced_ide_page.myClassRenameButton_Click());
                await (advanced_ide_page.myClassRenamewith_NullValue())
                await expect(advanced_ide_page.requiredFieldValidationMessageText).toBeVisible();

                await (advanced_ide_page.myclassRenameCancelButton_Click());
                await (advanced_ide_page.myClassDots_Click());

                await (advanced_ide_page.myClassDownloadButton_Click())
                await allure.step("Step_024_Verify it will display validation message 'invalid name' for invalid file name", async () =>{
                    await (advanced_ide_page.myClassDots_Click());
                    await (advanced_ide_page.myClassRenameButton_Click());
                    await (advanced_ide_page.myClassRenamewith_invalidname())
                    await expect(advanced_ide_page.invalidFileNameValidationMessageText).toBeVisible();

                });
            });
        });
            test('Testcase_012_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
                await allure.step("Step_025_Verify file created with valid file name will display under mail folder", async () =>{
                    await (advanced_ide_page.advancedIdeClick());
                    await (advanced_ide_page.myClassDots_Click());
                    await (advanced_ide_page.myClassRenameButton_Click());
                    await (advanced_ide_page.myClassRenamewith_Validname())
                    await expect(advanced_ide_page.renamedFileName).toBeVisible();
                    //await expect(advanced_ide_page.invalidFileNameValidationMessageText).toBeVisible();

                });
            });

            // code for Maven lib
            test('Testcase_013_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
                await allure.step("Step_026_Verify 'maven-lib' click , redirect to External Library page.", async () =>{
                   await (advanced_ide_page.advancedIdeClick());
                   await (advanced_ide_page.mavenLibDots_click());
                   await (advanced_ide_page.managelib_click());
                   await advanced_ide_page.ExternalLibraryH1Text.isVisible();
                   await advanced_ide_page.ExternaLibraryInputTextbox.isVisible();

                });
            });
            // code on 07-11-23
               /*test('Testcase_014_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
              await allure.step("Step_027_Verify 'manage-lib' click, 'Add Jar' field have required field validation .", async () =>{
                   await (advanced_ide_page.advancedIdeClick());   
                   await (advanced_ide_page.mavenLibDots_click());
                    await (advanced_ide_page.manageLibsMenuOption_Click());
                    await (advanced_ide_page.addLibraryButton_Click());
                    await expect(page.getByText('This is a required field')).toBeVisible();
         
                });
                await allure.step("Step_028_Verify 'ManageLib-lib' click, 'External Library page' instruction displayed", async () =>{
                   await expect(page.getByText('Library should be available in a public Maven repository.')).toBeVisible();
                   await expect(page.getByText('You can search maven artifacts in')).toBeVisible();
                  // await (advanced_ide_page.instructionFirstLink_Click());
                   //await (advanced_ide_page.instructionSecondLink_Click());
                   await expect(page.getByText('It should be in a format like - org.apache.commons:commons-lang3:3.4')).toBeVisible();
                   await (advanced_ide_page.addExternalLibrary_CloseButton());
                });
            });
        
          test('Testcase_015_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
                   await allure.step("Step_029_Verify 'ManageLib-lib' click, Added Library should get display in ‘ADDED LIBRARIES’ section", async () =>{
                    await (advanced_ide_page.advancedIdeClick());  
                    await (advanced_ide_page.mavenLibDots_click());
                    await (advanced_ide_page.manageLibsMenuOption_Click());
                    await (advanced_ide_page.addLibrary());
                    await (advanced_ide_page.addLibraryButton_Click());
                    await expect(page.getByText('ADDED LIBRARIES')).toBeVisible();
                    await advanced_ide_page.libraryAddedSection.isVisible();
                    await advanced_ide_page.libraryAddedTrashIcon.isVisible();
                    await (advanced_ide_page.addLibraryTrashIcon_Click())
                    await advanced_ide_page.libraryAddedSection.isHidden();

                   });
                });
                  test('Testcase_016_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
                   await allure.step("Step_030_Verify 'ManageLib-lib' click, 'Closebutton click will close the page", async () =>{
                    await (advanced_ide_page.advancedIdeClick());  
                    await (advanced_ide_page.mavenLibDots_click());
                    await (advanced_ide_page.manageLibsMenuOption_Click());
                    await (advanced_ide_page.addLibrary());
                    await (advanced_ide_page.addLibraryButton_Click());
                    await (advanced_ide_page.addLibraryTrashIcon_Click());
                    await (advanced_ide_page.mavenlibText).isVisible();
                    });
                });
              test('Testcase_017_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
               
                    await allure.step("Step_031_Verify 'Manage-lib' click, for invalid jarfile it will display message 'The Add Jar from Maven Library field format is invalid'", async () =>{
                    await (advanced_ide_page.advancedIdeClick()); 
                    await (advanced_ide_page.mavenLibDots_click());
                    await (advanced_ide_page.manageLibsMenuOption_Click());
                    await (advanced_ide_page.addLibraryinvalid_Input());
                    await (advanced_ide_page.addLibraryButton_Click());
                    await expect(page.getByText('The Add Jar from Maven Library field format is invalid')).toBeVisible();

                });

            });*/

            // code started for 'lib' folder
           /*test('Testcase_018_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
            await allure.step("Step_032_Verify 'lib' 3 dotsclick, it should display 3 menu option[New File, New Folder,Upload File ", async () =>{
                await (advanced_ide_page.advancedIdeClick()); 
                await (advanced_ide_page.libDots_Click());
                await advanced_ide_page.newFileOptionClick.isVisible();
                await advanced_ide_page.newFolderOptionClick.isVisible();
                await advanced_ide_page.libUploadOptionClick.isVisible();

            });
            await allure.step("Step_033_Verify 'lib' 3 dotsclick, it should display 3 menu option[New File, New Folder,Upload File ", async () =>{
                    await (advanced_ide_page.newFileOption_Click());
                    await (advanced_ide_page.newFileSubmit_Click());
                    await expect(page.getByText("This is a required field")).toBeVisible();
                    await (advanced_ide_page.newFileCancelIcon_Click());

            });
        });
        test('Testcase_019_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
            await allure.step("Step_034_Verify when user created 'New File' , its men options [Delete, Rename, Download]options.", async () =>{
                await (advanced_ide_page.advancedIdeClick()); 
                await (advanced_ide_page.libDots_Click());
                await (advanced_ide_page.newFileOption_Click());
               await (advanced_ide_page.newFileWithoutJavaextension ());
                await (advanced_ide_page.newFileSubmit_Click());
                await (advanced_ide_page.dynamicFileCreatedDots_Click());
                await advanced_ide_page.libDynamicFileMenuoptionDelete.isVisible();
                await advanced_ide_page.libDynamicFileMenuOptionRename.isVisible();
                await advanced_ide_page.libDynamicFileMenuOptionDownload.isVisible();
            });
               
                await allure.step("Step_035_Verify when user click on created dynamicfile[withoutjava extension] , on click over it it display popup", async () =>{
                  await (advanced_ide_page.libdynamicFileCreated_click());
                  await expect (page.getByText('Only .java,.txt file types can be edited')).toBeVisible();
                  await (advanced_ide_page.libNewFileWithoutJava_Click_Okaybutton());
                });
                  // work started on 08-11-23
                  await allure.step("Step_036_Verify when user click on created dynamicfile[filename with sapce] , it should display 'invalid Filename' validation message", async () =>{
                  await (advanced_ide_page.libDots_Click());
                await (advanced_ide_page.newFileOption_Click());
               await (advanced_ide_page.invalidFileName_WithSpace ());
               await (advanced_ide_page.newFileSubmit_Click());
               await expect(page.getByText('Invalid name')).toBeVisible()
               //await (advanced_ide_page.invalidFileName_WithJavaExtension ());
               await (advanced_ide_page.newFileCancelIcon_Click());

                  });
                });
               test('Testcase_020_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
                  await allure.step("Step_037_Verify when user click on created dynamicfile[filename with Java extension] , it should display under 'lib' folder and while clicking on cancel icon it display popup with message", async () =>{
                    await (advanced_ide_page.advancedIdeClick()); 
                    await (advanced_ide_page.libDots_Click());
                    await (advanced_ide_page.newFileOption_Click());
                    await (advanced_ide_page.validFileName_WithJavaExtension ());
                    await(advanced_ide_page.newFileCancelIcon_Click());
                    await expect(page.getByText('ONLY .JAVA,.TXT FILE TYPES CAN BE EDITED')).toBeVisible();
                    await (advanced_ide_page.libCancelButtonPopupWindowOkbutton_Click());
                    await (advanced_ide_page.libDots_Click());
                    await (advanced_ide_page.newFileOption_Click());
                    await (advanced_ide_page.validFileName_WithJavaExtension ());
                    await (advanced_ide_page.newFileSubmit_Click());
                    await advanced_ide_page.libNewFileCreatedwithJavaExtension.isVisible();
                  });

                });
                test('Testcase_021_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
                  await allure.step("Step_038_Verify it won't allow to createfile with same name, it should display message 'Duplicate Filname", async () =>{
                    await (advanced_ide_page.advancedIdeClick()); 
                    await (advanced_ide_page.libDots_Click());
                    await (advanced_ide_page.newFileOption_Click());
                    await (advanced_ide_page.validFileName_WithJavaExtension ());
                    await (advanced_ide_page.newFileSubmit_Click());
                    await (advanced_ide_page.libDots_Click());
                    await (advanced_ide_page.newFileOption_Click());
                    await (advanced_ide_page.validFileName_WithJavaExtension ());
                    await (advanced_ide_page.newFileSubmit_Click());
                    await expect(page.getByText('Duplicate Filename')).toBeVisible();
                    await (advanced_ide_page.newFileCancelIcon_Click());
                  });

                });*/

                // lib >> New Folder code started
                /*test('Testcase_022_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
                    await allure.step("Step_039_Verify click on 'lib >> New Folder' is 'required field' control", async () =>{
                        await (advanced_ide_page.advancedIdeClick()); 
                        await (advanced_ide_page.libDots_Click());
                        await (advanced_ide_page.libNewFolderOption_Click());
                        await (advanced_ide_page.newFileSubmit_Click())
                        await expect(page.getByText('This is a required field')).toBeVisible();
                        await (advanced_ide_page.newFileCancelIcon_Click());
                    });
                    await allure.step("Step_040_Verify it wont allow foldername with space", async () =>{
                        await (advanced_ide_page.libDots_Click());
                        await (advanced_ide_page.libNewFolderOption_Click());
                        await (advanced_ide_page.invalidFileName_WithSpace ());
                        await (advanced_ide_page.newFileSubmit_Click())
                        await expect(page.getByText('Invalid name')).toBeVisible();
                       
                     });

                    });
                    test('Testcase_023_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
                     await allure.step("Step_041_Verify 'lib >> New Folder', creates new folder under 'lib'", async () =>{
                        await (advanced_ide_page.advancedIdeClick()); 
                        await (advanced_ide_page.libDots_Click());
                        await (advanced_ide_page.libNewFolderOption_Click());
                        await (advanced_ide_page.validFileName_WithJavaExtension ());
                        await (advanced_ide_page.newFileSubmit_Click());
                        await advanced_ide_page.libNewFileCreatedwithJavaExtension.isVisible();
                     });
                     await allure.step("Step_042_Verify when user click on lib folder , it expand and display its subfolder and when user again click on lib folder , it compress its subfolder", async () =>{
                         await (advanced_ide_page.libFolder_Click());
                         await (advanced_ide_page.dynamicFolder).isVisible();
                         await (advanced_ide_page.libFolder_Click());
                         await (advanced_ide_page.dynamicFolder).isHidden();


                     });
                    });*/
                  // code strated of 09-11-23
                  test('Testcase_023_verifyAdvancedIDE_Without_Login for NewFolder Element', async ({ page }) => {
                    //await allure.step("Step_042_Verify when user give folder name and click on cancel icon, it won't create a afolder.", async () =>{
                        await (advanced_ide_page.advancedIdeClick()); 
                       // await (advanced_ide_page.libDots_Click());
                        //await (advanced_ide_page.libNewFolderOption_Click());
                       // await (advanced_ide_page.newFileWithoutJavaextension());
                       // await(advanced_ide_page.newFileCancelIcon_Click());
                       // await (advanced_ide_page.dynamicFolder).isVisible();
         
                 // });
                  await allure.step("Step_043_Verify uploaded folder should get display under lib folder.", async () =>{
                    await (advanced_ide_page.libDots_Click());
                    await (advanced_ide_page.libFolder_UploadOptionClick());
                  const file_path = './tests/upload_file/file1.txt';
                    await page.setInputFiles('input[type=file]',file_path);

                    //await (advanced_ide_page.libFolder_UploadedFile());.
                    await (advanced_ide_page.uploadedFile).isVisible();
                    //await page.waitForTimeout(3000);
                    //await (advanced_ide_page.dynamicFolder_Dots_Click());
                   // await (advanced_ide_page.dynamicFolderDownloadOption_Click());


                    

                  });


                });

            });
                     


                


            
        




    
                
            
        
        

        

        


  
        
                   
                
          
            
   
                
            
            



     



                
       

       
    

           


            

    

      


        

        
    

    


        
   
    

            
        
    
    

