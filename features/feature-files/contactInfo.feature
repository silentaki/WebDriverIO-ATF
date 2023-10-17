Feature: workday login scenario

  @regression @updateContactInfo
  Scenario: As a user, I should be able to update the phone number
    When I login with "giveEmail" and "givePassword"
    Then I navigate to candidate home and update the "city"

