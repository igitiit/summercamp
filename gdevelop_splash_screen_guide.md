# How to Create a Splash Screen in GDevelop

Creating a splash screen in GDevelop is a great way to add a professional touch to your game. The basic idea is to create a dedicated scene that shows your logo or a title for a few seconds and then automatically moves to the main menu or the first level.

Here is a step-by-step guide:

### Step 1: Create a New Scene for the Splash Screen

1.  Open your project in GDevelop.
2.  In the **Project Manager** panel on the left, right-click on **Scenes** and select **Create a new scene**.
3.  Name the new scene something descriptive, like `Splash`.

### Step 2: Set the Splash Scene as the Start Scene

1.  In the **Project Manager**, click on **Game Settings**, then select **Properties**.
2.  Under **Start scene**, choose your new `Splash` scene from the dropdown menu. This ensures it's the first thing players see.

### Step 3: Add Your Logo or Text

1.  Open the `Splash` scene by clicking on it.
2.  Add a new object to display your logo. In the **Objects** panel, click **Add a new object**.
3.  Select **Sprite** and add the image file for your logo.
4.  Drag the logo object from the Objects panel onto the scene. Position it where you want it, usually in the center.

### Step 4: Create the Events to Switch Scenes

This is where you'll add the logic to wait for a few seconds and then change to your main menu.

1.  Go to the **Events** tab for your `Splash` scene.
2.  Create a new event by clicking the **Add a new event** button.

**Event 1: Start a timer when the scene begins.**

*   **Condition**: Search for and add the condition `At the beginning of the scene`.
*   **Action**: Click `Add action`. Search for and select `Start (or reset) a scene timer`.
*   In the parameters, give the timer a name in quotes, for example, `"SplashTimer"`.

**Event 2: Change the scene when the timer is finished.**

*   **Condition**: Click `Add condition`. Search for and select `Scene timer value`.
    *   **Timer's name**: Enter the same name you used before: `"SplashTimer"`.
    *   **Sign of the test**: Choose `>` (greater than).
    *   **Time in seconds**: Enter how long you want the splash screen to show, for example, `3`.
*   **Action**: Click `Add action`. Search for and select `Change the scene`.
    *   **Name of the new scene**: Choose your main menu or first level scene (e.g., `"MainMenu"`).
    *   Make sure to **uncheck** "Stop any other paused scenes?".

Your event sheet should look something like this:

| Condition                               | Action                               |
| :-------------------------------------- | :----------------------------------- |
| At the beginning of the scene           | Start (or reset) the timer "SplashTimer" |
| The timer "SplashTimer" is greater than 3 seconds | Change to scene "MainMenu" (don't stop paused scenes) |

---

### Optional Enhancements

*   **Fade Out Effect**: For a smoother transition, you can make the logo fade out before changing scenes. Use the **Tween** behavior on your logo sprite and create a tween for its opacity from 255 to 0 over 1 second.
*   **Press Key to Skip**: Add a new event with the condition `Any key is pressed` and the action `Change the scene` to allow players to skip the splash screen.
