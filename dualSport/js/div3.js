// using prompts and alerts to mimic java scanner 
// nodejs would be closer but this is just js for now
//java code commented out below

let div3range = (start, end) => {
  let counter = start;
    while(counter <= end) {
      if(counter % 3 === 0) {
        console.log(counter);
      }
      counter += 1;
    }
}

while(true) {
  let exitCode = prompt("To exit: type (exit) / enter to (continue)", "Do you want to continue or exit?");

  if(exitCode === "exit") {
    break;
  } else {
    let start = parseInt(prompt("start #"));
    let end = parseInt(prompt("end #"));
    div3range(start, end);
  }
}


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