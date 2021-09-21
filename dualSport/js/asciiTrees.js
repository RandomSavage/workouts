/* 
public class AdvancedAstrology {

  public static void printStars(int number) {
      // part 1 of the exercise
      int counter = 0;
      while(counter < number) {
          System.out.print("*");
          counter++;
      }
      System.out.println("");
  }

  public static void printSpaces(int number) {
      // part 1 of the exercise
      int counter = 0;
      while(counter < number) {
          System.out.print(" ");
          counter++;
      }
  }

  public static void printTriangle(int size) {
      // part 2 of the exercise
      int spaceCount = size - 1;
      int starCount = 1;
      while(spaceCount >= 0) {
          printSpaces(spaceCount);
          printStars(starCount);
          spaceCount--;
          starCount++;
      }
  }

  public static void printBase(int height) {
      int buildCount = 0;
      while(buildCount < 2){
          printSpaces(height - 2);
          printStars(3);
          buildCount++;
      }
  }

  public static void christmasTree(int height) {
      // part 3 of the exercise

      int starTotal = height * 2 - 1;
      int starCount = 1;
      int levelCount = 0;
      int spaceCount = starTotal / 2;
      while(levelCount <= height && starCount <= starTotal) {
          printSpaces(spaceCount);
          printStars(starCount);
          spaceCount--;
          starCount = starCount + 2;
          levelCount++;
      }
      printBase(height);
  }

  public static void main(String[] args) {
      // The tests are not checking the main, so you can modify it freely.

      printTriangle(5);
      System.out.println("---");
      christmasTree(4);
      System.out.println("---");
      christmasTree(10);
  }
}
 */