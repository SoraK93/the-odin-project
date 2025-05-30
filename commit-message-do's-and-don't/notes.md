# THOUGHT
Having a good commit message means I have to be very specific about the changes I have made in the code.

## And what makes a 'good' commit message?
Providing to the point commit subject and short but descriptive body

## when is a good time to make a commit?
Creating new feature, modification, fixing bug, or anything that I think is meaningful.
Getting the feel for good commits require practice.

## But when I normally commit I do get any option for body. Where to put that?
Well simply use - git commit
This will open up a new window (if using VSCode), where we can provide a proper subject and body.

### Example of a bad commit :- 
Fixed a bug in the file  
This message does not give a clear picture of the bug.

### Example of a good commit :- 
subject: add missing alt attribute to image
body: Screen reader won't read img to users with disabilities without this information.

## The Seven Rules of Great Commit Message:
1. Seperate subject from body using a blank line
2. Limit the subject line to 50 characters
3. CAPITALIZE THE SUBJECT LINE
4. Do Not end the subject line with a period (.)
5. Use the imperative mood in the subject line
    - If applied, the commit will \<subject-line> <-- Check if title works with this statement.
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

# Conventional Commits

> [!NOTE]  
> **Structure of commit messages**:  
> `\<type>[optional scope]: \<description>`  
> `[optional body]`  
> `[optional footer(s)]`  

### \<type>: Communicate intent to the consumers of your lib
  - fix -> patching bugs
  - feat -> adding new features
  - BREAKING CHANGE -> in footer
  - build
  - chore
  - ci
  - docs
  - test
  - pref
  - refactore
  - style

