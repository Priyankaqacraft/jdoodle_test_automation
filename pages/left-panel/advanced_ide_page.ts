import { Page, Locator, Keyboard } from '@playwright/test'
import { Options } from 'prettier';
class AdvancedIdePage {
    [x: string]: any;
    page: Page;
    btnStartCoding: Locator;
    advancedJavaIde : Locator;
    advancedIdeHeading : Locator;
    folderFirstDots : Locator;
    folderFirst : Locator;
    homeIcon :Locator;
    myClassText :Locator;
    mavenLibFolder : Locator;
    mavenlibText :Locator;
    libText :Locator;
    myClassDots : Locator;
    mavenlibDots : Locator;
    libDots : Locator;
    newFileButton : Locator;
    newFileCreateTextbox : Locator;
    newFileSubmitBtn : Locator;
    newFileDeleteBtn : Locator;
    newFileValidationMessage : Locator;
    newfileDynamicFolder : Locator;
    popupWindowText : Locator;
    popupWindowButton : Locator;
    invalidValidationMessage : Locator;
    folderNameWithJavaExtension : Locator;
    dynamicFolderDots : Locator;
    dynamicSubFolderStartfile : Locator;
    dynamicSubFolderRename : Locator;
    dynamicSubFolderDelete : Locator;
    dynamicSubFolderDownload : Locator;
    deletePopWindowText : Locator;
    deleteYesButton : Locator;
    deleteNOButton : Locator;
    javaExtensionFolderDeleteButton : Locator;
    javaExtensionFolderDots : Locator;
    javaExtensionFolderRenameButton :Locator;
    dynamicFolderDownload :Locator;
    newFolderButton : Locator;
    folderSubmitButton :Locator;
    folderSubmenuNewFile :Locator;
    folderSubmenuUploadFile : Locator;
    myClassDeleteButton : Locator;
    myClassRenameButton : Locator;
    myClassDownloadButton : Locator;
    myClassJavaText : Locator;
    renameInputTextbox : Locator;
    renameSubmitIcon : Locator;
    renameCancelButton : Locator;
    invalidFileNameValidationMessageText : Locator;
    renamedFileName : Locator;
    manageLibs : Locator;
    manageLibsDots : Locator;
    ExternalLibraryH1Text  :Locator;
    ExternaLibraryInputTextbox : Locator;
    addLibraryButton : Locator;
    manageLibsMenuOption : Locator;
    instructionFirstLink : Locator;
    instructionSecongLink : Locator;
    externalLibraryCloseButton : Locator;
    addedLibrariesText : Locator;
    libraryAddedSection : Locator;
    libraryAddedTrashIcon : Locator;
    libDotsBlickButton : Locator ; 
    newFileOptionClick : Locator;
    newFolderOptionClick : Locator;
    libUploadOptionClick : Locator;
    libNewFileTextBox : Locator;
    newFileSubmitButton : Locator;
    newFieCancelButton : Locator;
    dynamicFileCreatedDots : Locator;
    libDynamicFileMenuoptionDelete : Locator;
    libDynamicFileMenuOptionRename : Locator;
    libDynamicFileMenuOptionDownload : Locator;
    libdynamicCreatedFile : Locator;
    withoutJavaFileClickFilePopupOkayButton : Locator;
    libNewFileCreatedwithJavaExtension : Locator;
    libPopupWindowOkayButton : Locator;
    libNewFolderOptionClick : Locator;
    libDynamicFolderOptionNewFile : Locator;
    libDynamicFolderOptionNewFolder : Locator;
    libDynamicFolderOptionDelete : Locator;
    libDynamicFolderOptionRename : Locator;
    libDynamicFolderOptionUpload : Locator;
    libFolder :Locator;
    dynamicFolder : Locator;
    uploadedFile : Locator;
    dynamicFolderOptionDownload : Locator;






    
    






    constructor(page: Page) {
        this.page = page;
        this.btnStartCoding = page.locator("//a[text()='Start Coding ']")
        this.advancedJavaIde = page.locator("(//a[@href='/online-java-compiler-ide/'])[2]")
        this.advancedIdeHeading = page.locator("//span[@class='p-normal']")
        this.folderFirstDots =page.locator("(//button[@id='hs-dropdown-default'])[1]")
        this.folderFirst = page.locator("(//*[local-name()='svg'])[73]")
        this.homeIcon= page.locator ("(//*[local-name()='path'])[79]")
        this.myClassText = page.locator ("(//span[@class='p-small'])[4]")
        this.myClassDots = page.locator("(//button[@id='hs-dropdown-default'])[2]")
        this.mavenLibFolder = page.locator("(//*[local-name()='path'])[83]")
        this.mavenlibText =page.locator("(//span[@class='p-small'])[5]")
        this.mavenlibDots = page.locator("(//li[@data-item='maven-lib']//child::div/child::div/child::button)[1]")
        this.libText = page.locator("(//span[@class='p-small'])[6]")
        this.libDots = page.locator("(//li[@data-item='lib']//child::div/child::div/child::button)[1]")
        this.newFileButton = page.locator("(//button[@class='link-primary flex w-full gap-x-2 rounded-md px-3 py-2'])[1]")
        this.newFileCreateTextbox = page.locator("//input[@id='editInput']")
        this.newFileSubmitBtn = page.locator("(//form[@class='flex w-full items-center gap-1']//child::button)[1]")
        this.newFileDeleteBtn =page.locator("(//form[@class='flex w-full items-center gap-1']//child::button)[2]")
        this.newFileValidationMessage = page.locator("//div[@class='my-2 h-6 rounded-md py-0']//child::p")
        this.newfileDynamicFolder = page.locator("//li[@data-item='lib']//following::li//div/following-sibling::div/child::span[@class='p-small']")
        this.popupWindowText= page.locator("(//div[contains(@class,'sm:p-7')])[2]//child::h1")
        this.popupWindowButton = page.locator("(//div[contains(@class,'sm:p-7')])[2]//child::button")
        this.invalidValidationMessage = page.locator("//form[contains(@class,'gap-1')]//child::p[contains(@class,'text-left')]")
        this.folderNameWithJavaExtension = page.locator("//li[@data-item='lib']//following::li//following::li/div/child::div[2]/child::span[@class='p-small']")
        this.dynamicFolderDots = page.locator("(//li[@data-item='lib']//following::li/child::div/child::div/child::button[@id='hs-dropdown-default'])[1]")
        this.dynamicSubFolderStartfile = page.locator("//li[@data-item='lib']/following-sibling::li/child::div/child::div/child::div/child::button/child::span[contains(text(),'File')]")
        this.dynamicSubFolderRename = page.locator("//li[@data-item='lib']/following-sibling::li/child::div/child::div/child::div/child::button/child::span[contains(text(),'Rename')]")
        this.dynamicSubFolderDelete = page.locator("//li[@data-item='lib']/following-sibling::li/child::div/child::div/child::div/child::button/child::span[contains(text(),'Delete')]")
        this.dynamicSubFolderDownload=page.locator("//li[@data-item='lib']/following-sibling::li/child::div/child::div/child::div/child::a")
        this.deletePopWindowText = page.locator("(//div[contains(@class,'sm:p-7')])[1]//child::h1")
        this.deleteYesButton = page.locator("(//div[contains(@class,'sm:p-7')])[1]//child::div//child::button[contains(text(),'Yes')]")
        this.deleteNOButton = page.locator("(//div[contains(@class,'sm:p-7')])[1]//child::div//child::button[contains(text(),'No')]")
        this.javaExtensionFolderDeleteButton = page.locator("//li[@data-item='lib']/following-sibling::li/child::div/child::div/child::div/child::button/following-sibling::button/child::span[contains(text(),'Delete')]")
        this.javaExtensionFolderRenameButton = page.locator("//li[@data-item='lib']/following-sibling::li/child::div/child::div/child::div/child::button/following-sibling::button/child::span[contains(text(),'Rename')]")
        this.javaExtensionFolderDots =page.locator("//li[@data-item='lib']/following-sibling::li/child::div/child::div/child::button")
        this.dynamicFolderDownload =page.locator("//li[@data-item='lib']/following-sibling::li/child::div/child::div/child::div/child::button/following-sibling::a")
  // 'NewFolder' Element Xpath started
         this.newFolderButton = page.locator("(//button[@class='link-primary flex w-full gap-x-2 rounded-md px-3 py-2']/following-sibling::button)[1]")
         this.folderSubmitButton = page.locator("(//form[@class='flex w-full items-center gap-1']//child::button)[1]")
         this.folderSubmenuNewFile = page.locator("(//li[@data-item='lib']/following-sibling::li/child::div/child::div/child::div/child::button/child::span[contains(text(),'File')])[2]")
         this.folderSubmenuUploadFile = page.locator("(//li[@data-item='lib']/following-sibling::li)[2]/child::div[1]/child::div/child::div/child::button/span[contains(text(),'Upload ')]")
         

         //'MyClass.Java' Xpath started
         this.myClassDots= page.locator("(//li[@data-item='MyClass.java']//child::button)[1]")
         this.myClassJavaText = page.locator("((//li[@data-item='MyClass.java']/child::div/child::div)[2]/child::span)[2]")
         this.myClassDeleteButton =page.locator("//li[@data-item='MyClass.java']/child::div/child::div/child::div/child::button/child::span[contains(text(),'Delete')]")
         this.myClassRenameButton = page.locator("//li[@data-item='MyClass.java']/child::div/child::div/child::div/child::button/child::span[contains(text(),'Rename')]")
         this.myClassDownloadButton = page.locator("//li[@data-item='MyClass.java']/child::div/child::div/child::div/a")
         this.homerIcon =page.locator("(((//li[@data-item='MyClass.java']/child::div/child::div)[2]/child::span)//*)[1]")
         this.renameInputTextbox = page.locator("//li[@data-item='MyClass.java']/child::div/child::div/child::div/child::form/child::div/child::div/child::input")
         this.renameSubmitIcon = page.locator("//li[@data-item='MyClass.java']/child::div/child::div/child::div/child::form/child::button[@type='submit']")
         this.renameCancelButton = page.locator("//li[@data-item='MyClass.java']/child::div/child::div/child::div/child::form/child::button[2]")
         this.requiredFieldValidationMessageText = page.locator("//li[@data-item='MyClass.java']/child::div/child::div/child::div/child::form/child::div/child::div/following-sibling::p")
         this.invalidFileNameValidationMessageText = page.locator("//li[@data-item='MyClass.java']/child::div/child::div/child::div/child::form/child::div/child::p")
         this.renamedFileName = page.locator("(((//li[@data-item='/']/child::div)[2]/child::ul/child::li/child::div/child::div)[2]/child::span)[2]")

         // 'Maven-lib' code started
         this.mavenlibText=page.locator("((//li[@data-item='maven-lib']/child::div/child::div)[2]/child::span)[2]")
         this.manageLibs = page.locator("((//li[@data-item='maven-lib']/child::div/child::div)/following-sibling::div/child::span)[2]")
         this.manageLibsDots = page.locator("(//li[@data-item='maven-lib']//child::button)[1]")
         this.ExternalLibraryH1Text = page.locator("//h1[contains(text(),'Libraries')]")
         this.ExternaLibraryInputTextbox = page.locator("//input[@placeholder='org.apache.commons:commons-lang3:jar:3.9']")
         this.addLibraryButton = page.locator("//button[contains(text(),' Add Library ')]")
         this.manageLibsMenuOption = page.locator("//span[contains(text(),'Manage Libs')]")
         this.instructionFirstLink = page.locator("//a[@href='http://search.maven.org/']")
         this.instructionSecongLink = page.locator("//a[@href='http://mvnrepository.com/']")
         this.externalLibraryCloseButton = page.locator("(//div[@id='hs-libraries-modal']/child::div/child::div/child::div/child::div)[2]/child::button")
         this.addedLibrariesText = page.locator("//p[contains(text(),'Libraries')]")
         this.libraryAddedSection = page.locator("//li[contains(@class,'flex items-center gap-1')]/child::span")
         this.libraryAddedTrashIcon =page.locator("//li[contains(@class,'flex items-center gap-1')]/child::button")

         //'lib' XPath started
         this.libDotsBlickButton = page.locator("(//li[@data-item='lib']/child::div/child::div/child::button)")
         this.newFileOptionClick = page.locator("(//span[contains(text(),'New File')])[2]")
         this.newFolderOptionClick = page.locator("(//span[contains(text(),'New Folder')])[2]")
         this.libUploadOptionClick = page.locator("(//span[contains(text(),'Upload File')])[2]")
         this.libNewFileTextBox = page.locator("//form[contains(@class,'flex w-full items-center gap-1')]/child::div/child::div/child::input")
         this.newFileSubmitButton= page.locator("(//form[contains(@class,'flex w-full items-center gap-1')]/child::button)[1]")
         this.newFieCancelButton = page.locator("(//form[contains(@class,'flex w-full items-center gap-1')]/child::button)[2]")
         this.dynamicFileCreatedDots = page.locator("//li[@data-item='lib']/child::div/following-sibling::div/child::ul/child::li/child::div/child::div/child::button")
         this.libDynamicFileMenuoptionDelete = page.locator("(//span[contains(text(),'Delete')])[2]")
         this.libDynamicFileMenuOptionRename = page.locator("(//span[contains(text(),'Rename')])[1]")
         this.libDynamicFileMenuOptionDownload = page.locator("//a[contains(@href,'lib&name=file1&type=src')]")
         this.libdynamicCreatedFile = page.locator("(//li[@data-item='lib']/child::div/following-sibling::div/child::ul/child::li)[1]")
         this.withoutJavaFileClickFilePopupOkayButton = page.locator("//button[contains(text(),' Okay ')]")
         this.libNewFileCreatedwithJavaExtension =page.locator("//li[@data-item='lib']/child::div/following-sibling::div/child::ul/child::li")
         this.libPopupWindowOkayButton = page.locator("//button[contains(text(),'Okay')]")

         // 'lib>>New Folder' XPath started 
         this.libFolder = page.locator("//li[@data-item='lib']")
         this.libNewFolderOptionClick = page.locator("(//span[contains(text(),'New Folder')])[2]")
         this.libDynamicFolderOptionNewFile = page.locator("//div[@class='hs-dropdown relative open']/child::div/child::button/child::span[contains(text(),'New File')]")
         this.libDynamicFolderOptionNewFolder = page.locator("//div[@class='hs-dropdown relative open']/child::div/child::button/child::span[contains(text(),'New Folder')]")
         this.libDynamicFolderOptionDelete = page.locator("//div[@class='hs-dropdown relative open']/child::div/child::button/child::span[contains(text(),'Delete')]") 
         this.libDynamicFolderOptionRename = page.locator("//div[@class='hs-dropdown relative open']/child::div/child::button/child::span[contains(text(),'Rename')]")
         this.libDynamicFolderOptionUpload = page.locator("//div[@class='hs-dropdown relative open']/child::div/child::button/child::span[contains(text(),'Upload File')]")
         this.dynamicFolder =page.locator("(//li[@data-item='lib']/child::div/following-sibling::div/child::ul/child::li)[1]")
         this.uploadedFile = page.locator("//li[@data-item='lib']/child::div/following-sibling::div/child::ul/child::li/following-sibling::li")
         this.dynamicFolderOptionDownload = page.locator("(//li[@data-item='lib']/child::div/following-sibling::div/child::ul/child::li)[2]/child::div/child::div/child::div/child::a")


    }
    async clear2Cookies() {
      this.page.context();
      const context = this.page.context();
      await context.clearCookies();
      }

    async navigate() {
        await this.page.goto('/');
    
        this.btnStartCoding.click();
      }

      async advancedIdeClick()
      {
        await this.advancedJavaIde.click();
        
      }
      async firstFolderDotsClick()
      {
        await this.folderFirstDots.click();
        
      }
      async firstFolderClick()
      {
        await this.folderFirst.click();
       
      }
      async homeIconDisplay()
      {
        await this.homeIcon.isVisible();
        await this.myClassText.isVisible();
        await this.page.waitForTimeout(3000);
      }
      async mavenLibDisplay()
      {
        //await this.mavenLibFolder.click();
        await this.mavenlibText.isVisible();
      }
      async newFileClick_ForValidationMessage()
      {
        
        await this.newFileButton.click();
        await this.newFileSubmitBtn.click();
        await this.newFileDeleteBtn.click()
        await this.page.waitForTimeout(3000);

      }
      async newFileClick_Delete_Popupwindow()
      {
        await this.folderFirstDots.click();
        await this.newFileButton.click();
        await this.newFileDeleteBtn.click()
        await this.popupWindowButton.click();
        await this.page.waitForTimeout(3000);
      }
      async newfileClick_delete_PopupWinod_Okay()
      {
        await this.newFileDeleteBtn.click();
        await this.popupWindowButton.click();
      }

      async newFile_save()
      {
        await this.folderFirstDots.click();
        await this.newFileButton.click();
        await this.newFileCreateTextbox.fill("Folder1");
        await this.newFileSubmitBtn.click();
        await this.page.waitForTimeout(3000);   
        
      }
      async newFolder_With_invalidName()
      {
        await this.folderFirstDots.click();
        await this.newFileButton.click();
        await this.newFileCreateTextbox.fill("   abc");
        await this.newFileSubmitBtn.click();
        await this.page.waitForTimeout(3000); 

      }
      async newFolder_With_JavaExtension()
      {
        await this.folderFirstDots.click();
        await this.newFileButton.click();
        await this.newFileCreateTextbox.fill("folder30.java");
        await this.newFileSubmitBtn.click();
        //await this.folderNameWithJavaExtension.check();
        await this.page.waitForTimeout(3000); 

      }
      async dynamicFolder_Dots_Click()
      {
           await this.dynamicFolderDots.click();
           //await this.dynamicSubFolderStartfile.check();
      }
      async dynamicFolderStartFile_click()
      {
        //await this.folderFirstDots.click();
        //await this.newFileButton.click();
        //await this.newFileCreateTextbox.fill("folder4");
        await this.dynamicFolderDots.click();
        await this.dynamicSubFolderStartfile.click();
        //await this.page.waitForTimeout(5000); 
        //await this.dynamicFolderDots.click();
      }
      async dynamicSubfolderDelete_Folder()
      {
        
        await this.dynamicFolderDots.click();
        await this.dynamicSubFolderDelete.click();
        await this.page.waitForTimeout(3000);

      }
      async dynamicSubFolderDeleteFolder()
      {
        await this.folderFirstDots.click();
        await this.newFileButton.click();
        await this.newFileCreateTextbox.fill("folder14.java");
        await this.newFileSubmitBtn.click();
           
      }
      async dynamicJavaExtensionFolder_Delete()
      {
        await this.javaExtensionFolderDots.click();
        await this.javaExtensionFolderDeleteButton.click();
        await this.page.waitForTimeout(5000);

      }
      async deleteDynamicFolder()
      {

        await this.deleteYesButton.click();
      }
      async renameDynamicFolderDisplayValidationMessage()
      {

        await this.javaExtensionFolderRenameButton.click();
        await this.newFileSubmitBtn.click();
      }

      async newFolderCancelButtonClick()
      {
        await this.newFileDeleteBtn.click();
      }
       async renameFolderWithoutJavaExtension()
       {
        await this.dynamicFolderDots.click();
        await this.javaExtensionFolderRenameButton.click();
        await this.newFileCreateTextbox.fill("Folder3");
        await this.newFileSubmitBtn.click();
        await this.newfileDynamicFolder.click();

       }
       async popWindowOkButton_click()
       {
         await this.popupWindowButton.click();
       }
       async dynamicFolderDownloadButtonclick()
       {
        await this.dynamicFolderDownload.click();
       }

       // 'New Folder' code started from here

       async newFolderCreate()
       {
        await this.folderFirstDots.click();
        await this.newFolderButton.click();
        await this.page.waitForTimeout(5000);
       }
      async newFolderSubmit()
      {
        await this.newFileSubmitBtn.click();
      }
      async newFolderCreateInvalidName()
      {
        await this.folderFirstDots.click();
        await this.newFolderButton.click();
        await this.newFileCreateTextbox.fill("   abc");
        await this.newFileSubmitBtn.click();


      }
      async newFolderwithValidName()
      {
        await this.folderFirstDots.click();
        await this.newFolderButton.click();
        await this.newFileCreateTextbox.fill("Folder16");
        await this.newFileSubmitBtn.click();
        await this.page.waitForTimeout(5000);
      }
      async newFolderNameCancel_button()
      {
        await this.newFileDeleteBtn.click();
      }
      async newCreatedFolderClick()
        {

           await this.newfileDynamicFolder.click();
        }
        async newFolderNameCancelButton()
        {
          await this.folderFirstDots.click();
        await this.newFolderButton.click();
        await this.newFileCreateTextbox.fill("Folder1");
        }

        async newFolderUploadFile()
        {

          await this.folderSubmenuUploadFile.click();
        }

        async newFolderDownload()
        {
          await this.dynamicFolderDownload.click();
        }

        //MyClass.java stated from here
        async myClassDots_Click()
        {
          await this.myClassDots.click();
        }

        async myClassDeleteButton_Click()
        {
            await this.myClassDeleteButton.click();
            await this.page.waitForTimeout(5000);
        }
        async myClassRenameButton_Click()
        {
            await this.myClassRenameButton.click();
        }
        async myClassDownloadButton_Click()
        {
            await this.myClassDownloadButton.click();
        }
        async myClassRenamewith_NullValue()
        {
          await this.renameInputTextbox.fill(" ");
          await this.renameSubmitIcon.click();

        }
        async myclassRenameCancelButton_Click()
        {
          await this.renameCancelButton.click();
        }
        async myClassDownload_Click()
        {
          await this.myClassDownloadButton.click();
        }
        async myClassRenamewith_invalidname()
        {
          await this.renameInputTextbox.fill("  abc");
          await this.renameSubmitIcon.click();

        }
        async myClassRenamewith_Validname()
        {
          await this.renameInputTextbox.fill("file1");
          await this.renameSubmitIcon.click();

        }
        //'Maven Libs' code started from here
        async mavenLibDots_click()
        {
          await this.manageLibsDots.click();
          await this.page.waitForTimeout(5000);
        }
        async managelib_click()
        {
             await this.manageLibs.click();

        }
        async managelib_NullInputValue()
        {
          await this.ExternaLibraryInputTextbox.fill(" ");
             await this.addLibraryButton.click();

        }
        async manageLibsMenuOption_Click()
        {
          await this.manageLibsMenuOption.click();
        }
        async addLibraryButton_Click()
        {
          await this.addLibraryButton.click();
          await this.page.waitForTimeout(5000);
        }
        async instructionFirstLink_Click()
        {
              await this.instructionFirstLink.click();

        }
        async instructionSecondLink_Click()
        {
                 await this.instructionSecongLink.click();
        }
        async addExternalLibrary_CloseButton()
        {
          await this.externalLibraryCloseButton.click();
        }
        async addLibrary()
        {
          await this.ExternaLibraryInputTextbox.fill("org.apache.commons:commons-lang3:3.4");
          await this.page.waitForTimeout(5000);
        }
        async addLibraryTrashIcon_Click()
        {
          await this.libraryAddedTrashIcon.click();
        }
        async addLibraryinvalid_Input()
        {
          await this.ExternaLibraryInputTextbox.fill("abcdef");
          await this.page.waitForTimeout(5000);
        }

        //'lib' code started from here
        async libDots_Click()
        {
          await this.libDotsBlickButton.click();
         
        }
        async newFileOption_Click()
        {
          await this.newFileOptionClick.click()
          
        }
        async newFolderOption_Click()
        {
          await this.newFolderOptionClick.click();
        }
        async uploadFileOption_Click()
        {
          await this.libUploadOptionClick.click();
        }
        async uploadFileSubmit_Click()
        {
          await this.libUploadOptionClick.click();
        }
        async newFileInvalidValidation()
        {
          await this.libNewFileTextBox.fill("   abc")
        }
        async newFileSubmit_Click()
        {
             await this.newFileSubmitButton.click();
        }
        async newFileCancelIcon_Click()
        {
              await this.newFieCancelButton.click();
        }
        async newFileWithoutJavaextension ()
        {
          await this.libNewFileTextBox.fill("file2");
          await this.page.waitForTimeout(5000);
        }
        async invalidFileName_WithSpace ()
        {
          await this.libNewFileTextBox.fill("   file2");
          await this.page.waitForTimeout(5000);
        }
        async validFileName_WithJavaExtension ()
        {
          await this.libNewFileTextBox.fill("file2.java");
          await this.page.waitForTimeout(5000);
        }
        async dynamicFileCreatedDots_Click()
        {
          await this.dynamicFileCreatedDots.click();
        }
        async dynamicFileDeleteOption_Click()
        {
          await this.dynamicFileMenuoptionDelete.click();
        }
        async dynamicRenameOption_Click()
        {
          await this.dynamicFileMenuOptionRename.click()
        }
        async dynamicDownloadOption_Click()
        {
          await this.dynamiFileMenuOptionDownload()
        }
        async libdynamicFileCreated_click()
        {
          await this.libdynamicCreatedFile.click();
        }
        async libNewFileWithoutJava_Click_Okaybutton()
        {
          await this.withoutJavaFileClickFilePopupOkayButton.click();
        }
        async libCancelButtonPopupWindowOkbutton_Click()
        {
              await this.libPopupWindowOkayButton.click();
        }
        // 'lib >> New folder' code started
        async libNewFolderOption_Click()
        {
          await this.libNewFolderOptionClick.click();
        }
        async libNewFolderName_WithSPace()
        {
          await this.libNewFileTextBox.fill("   file2");
          await this.page.waitForTimeout(5000);      
        }
       async  libFolder_Click()
        {
            await this.libFolder.click();
        }
        async libFolder_UploadOptionClick()
        {

          await this.libDynamicFolderOptionUpload.click();
          
        }
        /*async libFolder_UploadedFile()
        {
          await this.uploadedFile.check();
          await this.page.waitForTimeout(5000);
        }*/
        async dynamicFolderDownloadOption_Click()
        {

          await this.dynamicFolderOptionDownload.click();
        }
        


        
}
       

export default AdvancedIdePage;