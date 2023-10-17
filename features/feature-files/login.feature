Feature: workday login scenario

@regression @login
  Scenario: As a user, I should be able to login into workday website
    When I login with "giveEmail" and "givePassword"
    Then I should verify the "Welcome, akash rawat"



