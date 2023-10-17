Feature: workday login scenario

  @regression @updateContactInfo
  Scenario: As a user, I should be able to update the phone number
    When I login with "akashrawat1289@gmail.com" and "Fonteva703@"
    Then I navigate to candidate home and update the "city"

