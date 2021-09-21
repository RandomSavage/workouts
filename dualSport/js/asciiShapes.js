/* 
public class StarSign {

  public static void main(String[] args) {

      
      //The tests are not checking the main, so you can modify it freely.
      //NB: If the tests don't seem to pass, you should try the methods here
      //in the main to make sure they print the correct shapes!
      
      printStars(3);
      System.out.println("\n---");  // printing --- between the shapes
      printSquare(4);
      System.out.println("\n---");
      printRectangle(5, 6);
      System.out.println("\n---");
      printTriangle(3);
      System.out.println("\n---");
  }

  public static void printStars(int number) {
      // first part of the exercise
      // you can print one star with the command
      // System.out.print("*");
      // call the print command n times
      // in the end print a line break with the comand
      // System.out.println("");
      int counter = 0;
      while(counter < number) {
          System.out.print("*");
          counter++;
      }
      System.out.println("");
  }

  public static void printSquare(int size) {
      // second part of the exercise
      int sizeCount = 0;
      while(sizeCount < size) {
          printStars(size);
          sizeCount++;
      }
  }

  public static void printRectangle(int width, int height) {
      // third part of the exercise
      int heightCount = 0;
      while(heightCount < height) {
          printStars(width);
          heightCount++;
      }
  }

  public static void printTriangle(int size) {
      // fourth part of the exercise
      int sizeCount = 0;
      while(sizeCount <= size) {
          printStars(sizeCount);
          sizeCount++;
      }
  }
}
 */