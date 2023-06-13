import java.util.Scanner;
import java.lang.Math;

 class Game{
     public static void gamefunction(){
        Scanner sc=new Scanner(System.in);
        System.out.println("\nYour Most Welcome In my game 'Number Guessing'\n ");
        System.out.println("Guidelines:\n");
        System.out.println("In this Game program will take a random number between 1 to 100 and you have to find the number.You will get '10' chances to answer\n");
        System.out.println("Enter '0' for start the game and '1' for the exit !!!");
        int choice= sc.nextInt();
        switch (choice) {

            case 0: {
                System.out.println("So let's Start the game\n");
                int answer = (int) (Math.random() * 100) + 1;
                int k = 10;
                System.out.println("The computer has choosed the number now it's your turn , give your best !! Good Luck !!! ");
                System.out.println("Pleae Enter your input");
                while (k>0){
                    int user = sc.nextInt();
                    if (user == answer) {
                        System.out.println("Congrats !!! You have guessed the number successfully");
                        break;
                    } else if (user > answer) {
                        System.out.println("The number is too high. Please enter low number");
                        System.out.println("You have " + (k - 1) + " Attempts left");
                        k--;
                    } else if (user < answer) {
                        System.out.println("The number is too low. Please enter high number");
                        System.out.println("You have " + (k - 1) + " Attempts left");
                        k--;
                    }

                    else {
                        System.out.println("Please enter a valid Guess");
                        break;
                    }

                }
                System.out.println("Thank you for playing this game !!!");
                break;
            }
            case 1: {
                System.out.println("Thank You !!");

            }
        }
    }

}

public class numberguessing {

    public static void main(String[] args) {
        Game obj=new Game();
        obj.gamefunction();


    }
}
