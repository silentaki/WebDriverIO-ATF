Feature: workday login scenario

@regression @login
  Scenario: As a user, I should be able to login into workday website
    When I login with "akashrawat1289@gmail.com" and "Fonteva703@"
    Then I should verify the "Welcome, akash rawat"



