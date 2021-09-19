/* import java.util.Scanner;

import javax.sound.sampled.SourceDataLine;

public class DivisibleByThree {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while(true) {
            System.out.println("To exit type exit");
            String exit = scanner.nextLine();

            if(exit == "exit") {
                scanner.close();
                break;
            } else {
                System.out.println("start #");
                int beginning = Integer.valueOf(scanner.nextLine());

                System.out.println("end #");
                int end = Integer.valueOf(scanner.nextLine());

                divisibleByThreeInRange(beginning, end);
            }
        }
    }
    
    public static void divisibleByThreeInRange(int beginning, int end) {
        int counter = beginning;

        while(counter <= end) {
            if(counter % 3 == 0) {
                System.out.println(counter);
            } 
            counter++;
        }
    }
} */